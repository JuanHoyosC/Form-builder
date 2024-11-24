import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field-number',
  standalone: true,
  imports: [CommonModule, InputNumberModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-number.component.html',
})
export class InputFieldNumberComponent extends FieldType<FieldTypeConfig> {}