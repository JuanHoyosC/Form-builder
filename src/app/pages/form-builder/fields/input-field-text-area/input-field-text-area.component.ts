import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-input-field-textarea',
  standalone: true,
  imports: [CommonModule, InputTextareaModule , ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-text-area.component.html',
})
export class InputFieldTextAreaComponent extends FieldType<FieldTypeConfig> {}