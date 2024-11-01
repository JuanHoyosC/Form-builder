import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-input-field-tel',
  standalone: true,
  imports: [InputMaskModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-tel.component.html',
  styleUrl: './input-field-tel.component.css'
})
export class InputFieldTelComponent extends FieldType<FieldTypeConfig> {}