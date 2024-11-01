import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-input-field-password',
  standalone: true,
  imports: [PasswordModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-password.component.html',
  styleUrl: './input-field-password.component.css'
})
export class InputFieldPasswordComponent extends FieldType<FieldTypeConfig> {}