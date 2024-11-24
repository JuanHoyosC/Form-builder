import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-field-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './field-description.component.html',
})
export class FieldDescriptionComponent {
  description = input.required<string>();
}
