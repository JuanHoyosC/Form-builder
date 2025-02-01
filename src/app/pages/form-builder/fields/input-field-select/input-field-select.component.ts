import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyOptionsPipe } from '../../pipes/formly-options.pipe';

@Component({
  selector: 'app-input-field-select',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    FormlySelectModule,
    FormlyOptionsPipe,
    ReactiveFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-select.component.html',
  styleUrl: './input-field-select.component.css',
})
export class InputFieldSelectComponent extends FieldType<FieldTypeConfig> {}
