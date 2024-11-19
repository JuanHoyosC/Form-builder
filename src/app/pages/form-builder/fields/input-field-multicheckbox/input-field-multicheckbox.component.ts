import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormlySelectModule } from '@ngx-formly/core/select';
@Component({
  selector: 'app-input-field-multicheckbox',
  standalone: true,
  imports: [CheckboxModule, CommonModule, FormlySelectModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-multicheckbox.component.html',
})
export class InputFieldMultiCheckboxComponent extends FieldType<FieldTypeConfig> {}