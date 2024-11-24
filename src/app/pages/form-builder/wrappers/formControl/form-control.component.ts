import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-fieldWrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-container #fieldComponent></ng-container>`,
})
export class FormControlWrapperComponent
  extends FieldWrapper
  implements OnInit
{
  ngOnInit(): void {
    this.form.reset();
    this.formControl.setValue(this.field.defaultValue);
    if (this.props.required) {
      this.formControl.addValidators([Validators.required]);
    } else if (this.props.disabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
    const minLength = this.props.minLength ?? 0;
    const maxLength = this.props.maxLength ?? Infinity;
    this.formControl.addValidators([
      Validators.minLength(minLength),
      Validators.maxLength(maxLength),
    ]);

    const min = this.props.min ?? 0;
    const max = this.props.max ?? Infinity;
    this.formControl.addValidators([Validators.min(min), Validators.max(max)]);
  }
}
