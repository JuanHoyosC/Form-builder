import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-field-text',
  standalone: true,
  imports: [InputTextModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-text.component.html',
  styleUrl: './input-field-text.component.css'
})
export class InputFieldTextComponent extends FieldType<FieldTypeConfig> {}