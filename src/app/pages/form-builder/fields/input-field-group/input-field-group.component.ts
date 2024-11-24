import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field-group',
  standalone: true,
  imports: [CommonModule, FormlyModule, ReactiveFormsModule],
  templateUrl: './input-field-group.component.html',
  styleUrl: './input-field-group.component.css'
})
export class InputFieldGroupComponent extends FieldType<FieldTypeConfig> {}
