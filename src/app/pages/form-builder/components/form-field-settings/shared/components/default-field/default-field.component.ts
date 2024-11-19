import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  CustomFormlyFieldConfig,
  FormType,
} from '../../../../../interfaces/form-builder';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormlyOptionsPipe } from '../../../../../pipes/formly-options.pipe';

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
  @Input() value: DefaultValue = undefined;
  @Input() field!: CustomFormlyFieldConfig;
  @Output() valueChange: EventEmitter<DefaultValue> = new EventEmitter();
  private onChangeFn: (value: DefaultValue) => void = () => {};
  private onTouched: () => void = () => {};
  model: { defaultValue: DefaultValue } = { defaultValue: undefined };
  typeDisplayRules: DisplayRules = {
    showMultiOptions: [FormType.multicheckbox],
    showOptions: [FormType.radio],
    showFormField: [],
  };

  visibilityConfig: DefaultValueBoolean = {
    showFormField: false,
    showMultiOptions: false,
    showOptions: false,
  };

  private writeValue(value: DefaultValue): void {
    if (value) {
      this.value = value;
    }
  }
  ngOnChanges(): void {
    this.initializeModelWithDefaultValue();
    this.updateVisibilitySettings();
  }
  
  /**
   * Initializes the model with the default value from the field configuration.
   */
  private initializeModelWithDefaultValue(): void {
    this.model = { defaultValue: this.field.defaultValue };
  }
  
  /**
   * Updates the visibility settings based on the current field type.
   * It checks each setting key to see if the current field type matches
   * the expected types specified in the visibility configuration.
   */
  private updateVisibilitySettings(): void {
    const fieldType = this.field.type as FormType;
    for (const key in this.typeDisplayRules) {
      const settingKey = key as keyof DisplayRules;
      this.visibilityConfig = {
        ...this.visibilityConfig,
        [key]: this.typeDisplayRules[settingKey]?.includes(fieldType),
      };
    }
  }

  private registerOnChange(fn: (value: DefaultValue) => void): void {
    this.onChangeFn = fn;
  }
  private registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onChange() {
    this.onChangeFn(this.value);
    this.valueChange.emit(this.value);
  }

  changeDefaultValue() {
    this.value = this.model.defaultValue;
    this.onChange();
  }
}

type DefaultValue = string | boolean | number | undefined;

type DisplayRules = {
  showMultiOptions: FormType[];
  showOptions: FormType[];
  showFormField: FormType[];
};

type DefaultValueBoolean = {
  [T in keyof DisplayRules]: boolean;
};
