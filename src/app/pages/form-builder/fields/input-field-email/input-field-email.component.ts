import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-input-field-email',
  standalone: true,
  imports: [InputMaskModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-email.component.html',
  styleUrl: './input-field-email.component.css'
})
export class InputFieldEmailComponent extends FieldType<FieldTypeConfig> {}
