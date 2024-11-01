import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-input-field-checkbox',
  standalone: true,
  imports: [CheckboxModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-checkbox.component.html',
  styleUrl: './input-field-checkbox.component.scss'
})
export class InputFieldCheckboxComponent extends FieldType<FieldTypeConfig> {}