import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-input-field-number',
  standalone: true,
  imports: [InputNumberModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-number.component.html',
  styleUrl: './input-field-number.component.css'
})
export class InputFieldNumberComponent extends FieldType<FieldTypeConfig> {}