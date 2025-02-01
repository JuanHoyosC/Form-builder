import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { SliderModule } from 'primeng/slider';
@Component({
  selector: 'app-input-field-slider',
  standalone: true,
  imports: [CommonModule, SliderModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-slider.component.html',
  styleUrl: './input-field-slider.component.css',
})
export class InputFieldSliderComponent extends FieldType<FieldTypeConfig> {}
