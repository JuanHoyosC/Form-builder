import { inject, Injectable, signal } from '@angular/core';
import {
  CustomFormlyFieldConfig,
  CustomFormlyFieldProps,
  FormType,
  OptionProps,
} from '../../../types/form-builder.types';
import { FormBuilderTypesService } from '../../../services/form-builder.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  FormFieldSettings,
  PropertyConfigMap,
  SectionKeys,
  SectionPropertyKeys,
} from './settings.types';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  private formBuilderTypesService = inject(FormBuilderTypesService);
  private fb = inject(FormBuilder);
  public form: FormGroup = new FormGroup({});
  public defaultSelectedField = signal<CustomFormlyFieldConfig>(
    {} as CustomFormlyFieldConfig
  );

  private debounceTimeout = signal<number | undefined>(undefined);

  public formFieldSettings = signal<FormFieldSettings>({
    data: {
      showDefaultValue: false,
      showOptions: false,
    },
    layout: {
      showAlign: false,
      showCols: false,
      showHeadingType: false,
      showRatingType: false,
      showSeverity: false,
      showTextFormattingOptions: false,
    },
    properties: {
      showDescription: false,
      showLabel: false,
      showLeftText: false,
      showPlaceholder: false,
      showRightText: false,
      showTooltip: false,
    },
    validations: {
      showDisabled: false,
      showExactLength: false,
      showMax: false,
      showMaxDate: false,
      showMaxLength: false,
      showMin: false,
      showMinDate: false,
      showMinLength: false,
      showPattern: false,
      showReadonly: false,
      showRequired: false,
      showStarCount: false,
    },
  });

  public dateValidation = signal<{
    minDate: Date | undefined;
    maxDate: Date | undefined;
  }>({ minDate: undefined, maxDate: undefined });

  private subscriptions: Subscription[] = [];
  private readonly propertyConfigMap: PropertyConfigMap = {
    properties: {
      showLabel: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.grid,
        FormType.group,
        FormType.number,
        FormType.multicheckbox,
        FormType.multiselect,
        FormType.password,
        FormType.radio,
        FormType.rating,
        FormType.select,
        FormType.slider,
        FormType.tel,
        FormType.textarea,
        FormType.text,
        FormType.title,
      ],
      showTooltip: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.multicheckbox,
        FormType.multiselect,
        FormType.password,
        FormType.radio,
        FormType.rating,
        FormType.select,
        FormType.tel,
        FormType.textarea,
        FormType.text,
      ],
      showPlaceholder: [
        FormType.calendar,
        FormType.email,
        FormType.number,
        FormType.multiselect,
        FormType.password,
        FormType.select,
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
        FormType.multiselect,
        FormType.paragraph,
        FormType.password,
        FormType.radio,
        FormType.rating,
        FormType.select,
        FormType.slider,
        FormType.tel,
        FormType.textarea,
        FormType.text,
      ],
      showLeftText: [FormType.rating],
      showRightText: [FormType.rating],
    },
    data: {
      showDefaultValue: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.multicheckbox,
        FormType.multiselect,
        FormType.password,
        FormType.radio,
        FormType.select,
        FormType.slider,
        FormType.tel,
        FormType.textarea,
        FormType.text,
      ],
      showOptions: [
        FormType.multicheckbox,
        FormType.multiselect,
        FormType.radio,
        FormType.select,
      ],
    },
    layout: {
      showSeverity: [FormType.alert],
      showRatingType: [FormType.rating],
      showAlign: [FormType.alert, FormType.paragraph, FormType.title],
      showTextFormattingOptions: [
        FormType.alert,
        FormType.paragraph,
        FormType.title,
      ],
      showHeadingType: [FormType.title],
      showCols: [FormType.group],
    },
    validations: {
      showStarCount: [FormType.rating],
      showMin: [FormType.number, FormType.slider],
      showMax: [FormType.number, FormType.slider],
      showMinDate: [FormType.calendar],
      showMaxDate: [FormType.calendar],
      showMinLength: [
        FormType.text,
        FormType.textarea,
        FormType.email,
        FormType.password,
      ],
      showMaxLength: [
        FormType.text,
        FormType.textarea,
        FormType.email,
        FormType.password,
      ],
      showExactLength: [FormType.text, FormType.textarea, FormType.email],
      showPattern: [
        FormType.text,
        FormType.textarea,
        FormType.email,
        FormType.password,
      ],
      showRequired: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.password,
        FormType.radio,
        FormType.rating,
        FormType.multicheckbox,
        FormType.multiselect,
        FormType.select,
        FormType.slider,
        FormType.tel,
        FormType.text,
        FormType.textarea,
      ],
      showReadonly: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.multicheckbox,
        FormType.multiselect,
        FormType.password,
        FormType.radio,
        FormType.select,
        FormType.tel,
        FormType.textarea,
        FormType.text,
      ],
      showDisabled: [
        FormType.calendar,
        FormType.checkbox,
        FormType.email,
        FormType.number,
        FormType.multicheckbox,
        FormType.multiselect,
        FormType.password,
        FormType.radio,
        FormType.select,
        FormType.tel,
        FormType.textarea,
        FormType.text,
      ],
    },
  };

  /**
   * Initializes the form with the selected field configuration and sets up subscriptions
   * for real-time updates and validation controls.
   * @param selectedField - The field configuration to initialize the form with.
   */
  public initializeFormFieldSettings(
    selectedField: CustomFormlyFieldConfig
  ): void {
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

  public buildDynamicFormGroup(selectedField: CustomFormlyFieldConfig): void {
    const { id, defaultValue, type, key } = selectedField;
    const props = selectedField.props;
    this.form = this.fb.group({
      id,
      defaultValue,
      type,
      key,
      props: this.fb.group({
        align: [props.align],
        stars: [props.stars],
        cols: [props.cols],
        description: [props.description],
        disabled: [
          { value: props.disabled, disabled: props.required || props.readonly },
        ],
        exactLength: [props.exactLength],
        headingType: [props.headingType],
        ratingType: [props.ratingType],
        label: [props.label],
        leftText: [props.leftText],
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
        rightText: [props.rightText],
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
      .map(({ minControlName: minControl, maxControlName }) =>
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
  private clearAllSubscriptions(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  /**
   * Subscribes to changes in the entire form to trigger updates.
   * @returns Subscription object for form changes.
   */
  private subscribeToFormChanges(): Subscription {
    return this.form.valueChanges.subscribe(() => this.handleFormChange());
  }

  /**
   * Handles form value changes with a debounce to update the field after a delay.
   */
  private handleFormChange(): void {
    if (this.debounceTimeout() !== undefined) {
      clearTimeout(this.debounceTimeout());
    }
    this.debounceTimeout.set(
      setTimeout(() => {
        this.updateField();
      }, 200) as unknown as number
    );
  }

  /**
   * Subscribes to changes in the 'props' field and updates the defaultSelectedField accordingly.
   * @returns Subscription object for 'props' changes.
   */
  private subscribeToPropsChanges(): Subscription {
    return this.form
      .get('props')
      ?.valueChanges.subscribe((newPropsValue: CustomFormlyFieldProps) => {
        this.updateDefaultSelectedField(newPropsValue);
        //this.updateDateValidation(newPropsValue);
        //this.applySanitizedValue(newPropsValue);
      }) as Subscription;
  }

  private applySanitizedValue(props: CustomFormlyFieldProps): void {
    if (props.options) {
      const defaultValue = this.defaultSelectedField().defaultValue;
      const sanitizedValue = this.sanitizeDefaultValue(
        defaultValue,
        props.options
      );
      this.defaultSelectedField.update((value) => ({
        ...value,
        defaultValue: sanitizedValue,
      }));
    }
  }

  private sanitizeDefaultValue(
    defaultValue: string | string[],
    options: OptionProps[]
  ): string | string[] | undefined {
    const validValues = options.map((option) => option.value);
    if (Array.isArray(defaultValue)) {
      return defaultValue.filter((value) => validValues.includes(value));
    } else if (typeof defaultValue === 'string') {
      return validValues.includes(defaultValue) ? defaultValue : undefined;
    }

    return defaultValue;
  }

  private updateDefaultSelectedField(
    newPropsValue: CustomFormlyFieldProps
  ): void {
    this.defaultSelectedField.update((prevValue) => ({
      ...prevValue,
      props: { ...this.getDefaultProps(newPropsValue) },
    }));
  }

  private updateDateValidation(newPropsValue: CustomFormlyFieldProps) {
    const { showMinDate, showMaxDate } = this.formFieldSettings().validations;
    if (showMinDate || showMaxDate) {
      this.dateValidation.set({
        minDate: newPropsValue.minDate,
        maxDate: newPropsValue.maxDate,
      });
    }
  }

  private getDefaultProps(props: CustomFormlyFieldProps) {
    const {
      min,
      max,
      minDate,
      maxDate,
      minLength,
      maxLength,
      pattern,
      exactLength,
      options,
    } = props;
    return {
      min,
      max,
      minDate,
      maxDate,
      minLength,
      maxLength,
      pattern,
      exactLength,
      options,
    };
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
          if (value) {
            control?.disable({ emitEvent: false });
          } else {
            control?.enable({ emitEvent: false });
          }
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
    this.defaultSelectedField.set(
      structuredClone({
        key: 'defaultValue',
        type: selectedField.type,
        defaultValue: selectedField.defaultValue,
        props: { ...this.getDefaultProps(selectedField.props) },
      })
    );
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
  public isSectionVisible(section: SectionKeys): boolean {
    const sectionConfig = this.formFieldSettings()[section];
    return Object.values(sectionConfig).includes(true);
  }

  /**
   * Updates the selected field in the form builder types service.
   * If the field was successfully updated, the fields list is updated.
   */
  private updateField(): void {
    const updated = this.formBuilderTypesService.updateField(
      this.formBuilderTypesService.fields(),
      structuredClone(this.form.value)
    );

    if (!updated) return;
    this.formBuilderTypesService.fields.set(updated);
  }
}
