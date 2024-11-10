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

   customClass() {
    return {
      'line-through': this.props['strikethrough'],
       underline: this.props['underline'],
       italic: this.props['italic'],
       'font-bold': this.props['bold'],
       'font-normal': !this.props['bold']
     }
   }
}
