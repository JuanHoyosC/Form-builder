import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-paragraph-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css'
})
export class ParagraphWrapperComponent extends FieldWrapper {}