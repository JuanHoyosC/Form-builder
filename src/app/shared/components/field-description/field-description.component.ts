import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-description',
  standalone: true,
  imports: [],
  templateUrl: './field-description.component.html',
  styleUrl: './field-description.component.css'
})
export class FieldDescriptionComponent {
  @Input() description: string | undefined = undefined;
}
