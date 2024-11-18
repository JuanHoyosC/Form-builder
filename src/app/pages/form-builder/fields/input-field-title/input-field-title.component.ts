import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-input-field-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field-title.component.html',
  styleUrl: './input-field-title.component.css',
})
export class InputFieldTitleComponent extends FieldType<FieldTypeConfig>  {

   get customClass() {
    return {
      'font-bold': this.props['textFormattingOptions'].includes('bold'),
      'line-through': this.props['textFormattingOptions'].includes('strikethrough'),
      italic: this.props['textFormattingOptions'].includes('italic'),
      underline: this.props['textFormattingOptions'].includes('underline'),
     }
   }
}
