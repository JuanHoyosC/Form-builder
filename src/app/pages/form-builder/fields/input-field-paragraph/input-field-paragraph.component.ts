import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-input-field-paragraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field-paragraph.component.html',
  styleUrl: './input-field-paragraph.component.css'
})
export class InputFieldParagraphComponent extends FieldType<FieldTypeConfig> {}