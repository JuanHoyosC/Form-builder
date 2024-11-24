import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-title-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleWrapperComponent extends FieldWrapper {
   get customClass() {
    return {
      'font-bold': this.props['textFormattingOptions'].includes('bold'),
      'line-through': this.props['textFormattingOptions'].includes('strikethrough'),
      italic: this.props['textFormattingOptions'].includes('italic'),
      underline: this.props['textFormattingOptions'].includes('underline'),
     }
   }
}
