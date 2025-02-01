import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyOptionsPipe } from '../../pipes/formly-options.pipe';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-input-field-multiselect',
  standalone: true,
  imports: [
    CommonModule,
    MultiSelectModule,
    FormlySelectModule,
    FormlyOptionsPipe,
    ReactiveFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-multiselect.component.html',
  styleUrl: './input-field-multiselect.component.css',
})
export class InputFieldMultiselectComponent extends FieldType<FieldTypeConfig> {}
