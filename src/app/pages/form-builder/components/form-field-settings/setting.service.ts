import { computed, Injectable, input, Signal, signal } from '@angular/core';
import {
  CustomFormlyFieldConfig,
  CustomFormlyFieldProps,
  FormType,
} from '../../interfaces/form-builder';
import { FormBuilderTypesService } from '../../services/form-builder.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  form: FormGroup;
  defaultSelectedField = signal<CustomFormlyFieldConfig>(
    {} as CustomFormlyFieldConfig
  );

  subscriptions: Subscription[] = [];

  private propertyConfigMap: PropertyConfigMap = {
    properties: {
      showLabel: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.grid,
        FormType.group,
        FormType.number,
        FormType.multicheckbox,
        FormType.password,
        FormType.radio,
        FormType.tel,
        FormType.text,
        FormType.title,
      ],
      showTooltip: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.password,
        FormType.radio,
        FormType.tel,
        FormType.text,
      ],
      showPlaceholder: [
        FormType.calendar,
        FormType.email,
        FormType.number,
        FormType.password,
        FormType.tel,
        FormType.text,
      ],
      showDescription: [
        FormType.alert,
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.multicheckbox,
        FormType.paragraph,
        FormType.password,
        FormType.radio,
        FormType.tel,
        FormType.text,
        FormType.title,
      ],
    },
    data: {
      showDefaultValue: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.multicheckbox,
        FormType.password,
        FormType.radio,
        FormType.tel,
        FormType.text,
      ],
      showOptions: [FormType.radio, FormType.multicheckbox],
    },
    layout: {
      showSeverity: [FormType.alert],
      showAlign: [FormType.alert, FormType.paragraph, FormType.title],
      showTextFormattingOptions: [
        FormType.alert,
        FormType.paragraph,
        FormType.title,
      ],
      showHeadingType: [FormType.title],
    },
    validations: {
      showMin: [FormType.number],
      showMax: [FormType.number],
      showMinLength: [FormType.text, FormType.email, FormType.password],
      showMaxLength: [FormType.text, FormType.email, FormType.password],
      showExactLength: [FormType.text, FormType.email],
      showPattern: [FormType.text, FormType.email, FormType.password],
      showRequired: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.password,
        FormType.radio,
        FormType.multicheckbox,
        FormType.tel,
        FormType.text,
      ],
      showReadonly: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.multicheckbox,
        FormType.password,
        FormType.radio,
        FormType.tel,
        FormType.text,
      ],
      showDisabled: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.multicheckbox,
        FormType.password,
        FormType.radio,
        FormType.tel,
        FormType.text,
      ],
    },
  };

  public readonly formFieldSettings = signal<FormFieldSettings>({
    data: {
      showDefaultValue: false,
      showOptions: false,
    },
    layout: {
      showHeadingType: false,
      showAlign: false,
      showSeverity: false,
      showTextFormattingOptions: false,
    },
    properties: {
      showLabel: false,
      showTooltip: false,
      showPlaceholder: false,
      showDescription: false,
    },
    validations: {
      showRequired: false,
      showDisabled: false,
      showReadonly: false,
      showMin: false,
      showMax: false,
      showMinLength: false,
      showMaxLength: false,
      showExactLength: false,
      showPattern: false,
    },
  });

  constructor(
    private formBuilderTypesService: FormBuilderTypesService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({});
  }

  /**
   * Initializes the form with the selected field configuration and sets up subscriptions
   * for real-time updates and validation controls.
   * @param selectedField - The field configuration to initialize the form with.
   */
  initializeFormFieldSettings(selectedField: CustomFormlyFieldConfig): void {
    this.clearAllSubscriptions();
    this.initializeConfig(selectedField);
    this.setDefaultField(selectedField);
    this.buildDynamicFormGroup(selectedField);

    const formChangeSubscription = this.subscribeToFormChanges();
    const propsChangeSubscription = this.subscribeToPropsChanges();
    const minMaxValidatorSubscriptions = this.addMinMaxValidatorsForFields();
    const controlStateChangeSubscriptions =
      this.setupControlStateSubscriptions();

    // Collect all subscriptions for easy cleanup
    this.subscriptions = [
      formChangeSubscription,
      propsChangeSubscription,
      ...minMaxValidatorSubscriptions,
      ...controlStateChangeSubscriptions,
    ];
  }

  buildDynamicFormGroup(selectedField: CustomFormlyFieldConfig): void {
    const { id, defaultValue, type, key } = selectedField;
    const props = selectedField.props;
    this.form = this.fb.group({
      id,
      defaultValue,
      type,
      key,
      props: this.fb.group({
        align: [props.align],
        cols: [props.cols],
        description: [props.description],
        disabled: [
          { value: props.disabled, disabled: props.required || props.readonly },
        ],
        exactLength: [props.exactLength],
        headingType: [props.headingType],
        label: [props.label],
        max: [props.max, Validators.min(props.min ?? 0)],
        maxDate: [props.maxDate],
        maxLength: [
          props.maxLength,
          Validators.minLength(props.minLength ?? 0),
        ],
        min: [props.min, Validators.max(props.max ?? Infinity)],
        minDate: [props.minDate],
        minLength: [
          props.minLength,
          Validators.max(props.maxLength ?? Infinity),
        ],
        options: [props.options ?? []],
        pattern: [props.pattern],
        placeholder: [props.placeholder],
        readonly: [
          { value: props.readonly, disabled: props.required || props.disabled },
        ],
        required: [
          { value: props.required, disabled: props.readonly || props.disabled },
        ],
        severity: [props.severity],
        textFormattingOptions: [props.textFormattingOptions],
        tooltip: [props.tooltip],
      }),
    });
  }

  /**
   * Adds dynamic min and max validators for multiple field pairs.
   * @param fieldPairs - Array of objects containing minControl and maxControl field names.
   * @returns Array of Subscription objects for the min/max validations.
   */
  private addMinMaxValidatorsForFields(): Subscription[] {
    const fieldPairs = [
      { minControlName: 'props.min', maxControlName: 'props.max' },
      { minControlName: 'props.minLength', maxControlName: 'props.maxLength' },
    ];
    return fieldPairs
      .map(({ minControlName: minControl, maxControlName: maxControlName }) =>
        this.addMinMaxValidators(minControl, maxControlName)
      )
      .flat();
  }

  /**
   * Sets up subscriptions to toggle the enable/disable state of form controls.
   * @returns An array of subscriptions for required, disabled, and readonly states.
   */
  private setupControlStateSubscriptions(): Subscription[] {
    const controls = [
      {
        control: 'props.required',
        affectedControlsNames: ['props.disabled', 'props.readonly'],
      },
      {
        control: 'props.disabled',
        affectedControlsNames: ['props.required', 'props.readonly'],
      },
      {
        control: 'props.readonly',
        affectedControlsNames: ['props.disabled', 'props.required'],
      },
    ];

    return controls.map(({ control, affectedControlsNames }) =>
      this.toggleControlsEnableState(control, affectedControlsNames)
    );
  }

  /**
   * Clears all active subscriptions to prevent memory leaks.
   */
  clearAllSubscriptions(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  /**
   * Subscribes to changes in the entire form to trigger updates.
   * @returns Subscription object for form changes.
   */
  private subscribeToFormChanges(): Subscription {
    return this.form.valueChanges.subscribe(() => this.updateField());
  }

  /**
   * Subscribes to changes in the 'props' field and updates the defaultSelectedField accordingly.
   * @returns Subscription object for 'props' changes.
   */
  private subscribeToPropsChanges(): Subscription {
    return this.form.get('props')?.valueChanges.subscribe((newPropsValue) => {
      this.defaultSelectedField.update((prevValue) => ({
        ...prevValue,
        props: newPropsValue,
      }));
    }) as Subscription;
  }

  /**
   * Adds dynamic min and max validators between two form controls.
   * When the min value changes, it updates the max control's minimum limit, and vice versa.
   * @param minControlName - Name of the form control for minimum value.
   * @param maxControlName - Name of the form control for maximum value.
   * @returns Array of Subscription objects for both controls.
   */
  private addMinMaxValidators(
    minControlName: string,
    maxControlName: string
  ): Subscription[] {
    const minControl = this.form.get(minControlName);
    const maxControl = this.form.get(maxControlName);

    const minSubscription = minControl?.valueChanges.subscribe(
      (minControlValue) => {
        maxControl?.setValidators([Validators.min(minControlValue)]);
        maxControl?.updateValueAndValidity({ emitEvent: false });
      }
    );

    const maxSubscription = maxControl?.valueChanges.subscribe(
      (maxControlValue) => {
        minControl?.setValidators([
          Validators.min(0),
          Validators.max(maxControlValue),
        ]);
        minControl?.updateValueAndValidity({ emitEvent: false });
      }
    );

    return [minSubscription, maxSubscription] as Subscription[];
  }

  /**
   * Enables or disables specified controls based on the value of a trigger control.
   * @param triggerControlName - The control name whose value determines if the affected controls are enabled or disabled.
   * @param affectedControls - An array of controls to be enabled or disabled based on the trigger control's value.
   */
  private toggleControlsEnableState(
    triggerControlName: string,
    affectedControlNames: string[]
  ): Subscription {
    return this.form
      .get(triggerControlName)
      ?.valueChanges.subscribe((value: boolean) => {
        affectedControlNames.forEach((controlName: string) => {
          const control = this.form.get(controlName);
          value
            ? control?.disable({ emitEvent: false })
            : control?.enable({ emitEvent: false });
        });
      }) as Subscription;
  }

  /**
   * Initializes the configuration based on the selected field's type.
   * This function updates the visibility of various form field properties
   * based on whether the selected field type is valid for the property.
   * @param selectedField - The selected field configuration.
   */
  private initializeConfig(selectedField: CustomFormlyFieldConfig): void {
    const fieldType: FormType = selectedField.type as FormType;
    Object.entries(this.propertyConfigMap).forEach(
      ([section, sectionConfig]) => {
        Object.entries(sectionConfig).forEach(([property, validTypes]) => {
          const shouldShow = validTypes.includes(fieldType);

          this.updateFieldConfig(
            section as SectionKeys,
            property as SectionPropertyKeys<SectionKeys>,
            shouldShow
          );
        });
      }
    );
  }

  /**
   * Updates the default field settings.
   * @param selectedField - The field configuration.
   */
  private setDefaultField(selectedField: CustomFormlyFieldConfig): void {
    this.defaultSelectedField.set({
      key: 'defaultValue',
      type: selectedField.type,
      defaultValue: selectedField.defaultValue,
      props: {
        ...selectedField.props,
        label: ' ',
      },
    });
  }

  /**
   * Sets the value of a specific property within a section of the form field settings.
   * @param section - The section to update (e.g., 'data', 'layout', 'properties', 'validations').
   * @param key - The specific property within the section to update (e.g., 'showLabel', 'showTooltip').
   * @param value - The new value for the property (true or false).
   */
  private updateFieldConfig<T extends SectionKeys>(
    section: T,
    key: SectionPropertyKeys<T>,
    value: boolean
  ): void {
    const currentConfig = this.formFieldSettings();
    if (currentConfig[section] && key in currentConfig[section]) {
      const updatedSection = {
        ...currentConfig[section],
        [key]: value,
      };

      this.formFieldSettings.update((config) => ({
        ...config,
        [section]: updatedSection,
      }));
    }
  }

  /**
   * Determines if a given section has any active configuration.
   * @param section - The section to evaluate (e.g., 'data', 'layout', 'properties', 'validations').
   * @returns `true` if any property in the section is active, otherwise `false`.
   */
  isSectionVisible(section: keyof FormFieldSettings): boolean {
    const sectionConfig = this.formFieldSettings()[section];
    return Object.values(sectionConfig).includes(true);
  }

  /**
   * Updates the selected field in the form builder types service.
   * If the field was successfully updated, the fields list is updated.
   */
  private updateField(): void {
    const fieldUpdated = this.formBuilderTypesService.updateField(
      this.formBuilderTypesService.fields(),
      this.form.value
    );
    if (fieldUpdated) {
      this.formBuilderTypesService.fields.set(structuredClone(fieldUpdated));
    }
  }
}

type FormFieldSettings = {
  data: {
    showDefaultValue: boolean;
    showOptions: boolean;
  };
  layout: {
    showHeadingType: boolean;
    showAlign: boolean;
    showSeverity: boolean;
    showTextFormattingOptions: boolean;
  };
  properties: {
    showLabel: boolean;
    showTooltip: boolean;
    showPlaceholder: boolean;
    showDescription: boolean;
  };
  validations: {
    showRequired: boolean;
    showDisabled: boolean;
    showReadonly: boolean;
    showMin: boolean;
    showMax: boolean;
    showMinLength: boolean;
    showMaxLength: boolean;
    showExactLength: boolean;
    showPattern: boolean;
  };
};

type SectionKeys = keyof FormFieldSettings;
type SectionPropertyKeys<T extends SectionKeys> = keyof FormFieldSettings[T];

type PropertyConfigMap = {
  [K in keyof FormFieldSettings]: {
    [P in keyof FormFieldSettings[K]]: FormType[];
  };
};
