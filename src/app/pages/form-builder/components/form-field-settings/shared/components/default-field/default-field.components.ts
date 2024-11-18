import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CustomFormlyFieldConfig } from '../../../../../interfaces/form-builder';

@Component({
  selector: 'app-default-field',
  standalone: true,
  imports: [FormsModule, FormlyModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaulltFieldComponent),
      multi: true,
    },
  ],
  template: ` <formly-form
    [fields]="[field]"
    [model]="model"
    (modelChange)="changeDefaultValue()"
  ></formly-form>`,
})
export class DefaulltFieldComponent implements OnChanges {
  @Input() value: DefaultValue = undefined;
  @Input() field!: CustomFormlyFieldConfig;
  @Output() valueChange: EventEmitter<DefaultValue> = new EventEmitter();
  private onChangeFn: (value: DefaultValue) => void = () => {};
  private onTouched: () => void = () => {};
  model: { defaultValue: DefaultValue } = { defaultValue: undefined };

  private writeValue(value: DefaultValue): void {
    if (value) {
      this.value = value;
    }
  }

  private registerOnChange(fn: (value: DefaultValue) => void): void {
    this.onChangeFn = fn;
  }
  private registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnChanges(): void {
    this.model = { defaultValue: this.field.defaultValue };
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


type DefaultValue = string | boolean | number | undefined