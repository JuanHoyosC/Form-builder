import { Component, forwardRef, model, OnChanges, signal } from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormlyOptionsPipe } from '../../../../pipes/formly-options.pipe';
import {
  CustomFormlyFieldConfig,
  FormType,
  OptionProps,
} from '../../../../types/form-builder.types';

@Component({
  selector: 'app-default-field',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    FormlyModule,
    FormlyOptionsPipe,
    MultiSelectModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaulltFieldComponent),
      multi: true,
    },
  ],
  templateUrl: './default-field.component.html',
})
export class DefaulltFieldComponent implements OnChanges {
  value = model<DefaultValue>(undefined);
  field = model.required<CustomFormlyFieldConfig>();
  options = signal<OptionProps[]>([]);
  onChangeFn: (value: DefaultValue) => void = () => {};
  onTouched: () => void = () => {};

  modelDefaultValue = signal<{ defaultValue: DefaultValue }>({
    defaultValue: undefined,
  });

  // Signals for typeDisplayRules
  typeDisplayRules = signal<DisplayRules>({
    showMultiOptions: [FormType.multicheckbox],
    showOptions: [FormType.radio],
    showFormField: [],
  });

  // Signals for visibilityConfig
  visibilityConfig = signal<DefaultValueBoolean>({
    showFormField: false,
    showMultiOptions: false,
    showOptions: false,
  });

  private writeValue(value: DefaultValue): void {
    if (value) {
      this.value.set(value);
    }
  }
  ngOnChanges(): void {
    this.updateVisibilitySettings();

    if (this.shouldInitializeOptions()) {
      this.initializeOptions();
    }
    
    this.initializeModelWithDefaultValue();
  }

  private shouldInitializeOptions(): boolean {
    return (
      this.visibilityConfig().showMultiOptions ||
      this.visibilityConfig().showOptions
    );
  }

  /**
   * Initializes the options.
   */
  private initializeOptions(): void {
    const options = this.field()?.props?.options;
    if (options) {
      this.options.set(options);
    }
  }

  /**
   * Initializes the model with the default value from the field configuration.
   */
  private initializeModelWithDefaultValue(): void {
    this.modelDefaultValue.set({ defaultValue: this.field().defaultValue });
  }

  /**
   * Updates the visibility settings based on the current field type.
   * It checks each setting key to see if the current field type matches
   * the expected types specified in the visibility configuration.
   */
  private updateVisibilitySettings(): void {
    const fieldType = this.field().type as FormType;
    for (const key in this.typeDisplayRules()) {
      const settingKey = key as keyof DisplayRules;
      this.visibilityConfig.set({
        ...this.visibilityConfig(),
        [key]: this.typeDisplayRules()[settingKey].includes(fieldType),
      });
    }
  }

  private registerOnChange(fn: (value: DefaultValue) => void): void {
    this.onChangeFn = fn;
  }
  private registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onChange() {
    this.onChangeFn(this.value());
  }

  changeDefaultValue() {
    this.value.set(this.modelDefaultValue().defaultValue);
    this.updateFieldDefaultValue(this.modelDefaultValue().defaultValue);
    this.onChange();
    this.onTouched();
  }

  updateFieldDefaultValue(value: OptionProps['value']) {
    this.field.update((fieldValue) => ({
      ...fieldValue,
      defaultValue: value,
    }));
  }
}

type DefaultValue = OptionProps['value'];

interface DisplayRules {
  showMultiOptions: FormType[];
  showOptions: FormType[];
  showFormField: FormType[];
}

type DefaultValueBoolean = {
  [T in keyof DisplayRules]: boolean;
};
