import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-input-field-title',
  standalone: true,
  imports: [],
  templateUrl: './input-field-title.component.html',
  styleUrl: './input-field-title.component.css'
})
export class InputFieldTitleComponent extends FieldType<FieldTypeConfig> {}