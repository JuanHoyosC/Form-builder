import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import {InputTextModule} from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-input-field-email',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-email.component.html',
  styleUrl: './input-field-email.component.css'
})
export class InputFieldEmailComponent extends FieldType<FieldTypeConfig> {}
