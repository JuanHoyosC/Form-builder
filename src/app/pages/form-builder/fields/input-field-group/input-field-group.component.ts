import { Component, ElementRef, HostListener, inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderTypesService } from '../../services/form-builder-types.service';
import { FormFieldGroupComponent } from '../../components/form-field-group/form-field-group.component';

@Component({
  selector: 'app-input-field-group',
  standalone: true,
  imports: [CommonModule, FormlyModule, FormFieldGroupComponent, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-group.component.html',
  styleUrl: './input-field-group.component.css'
})
export class InputFieldGroupComponent extends FieldType<FieldTypeConfig> {
  formBuilderTypesService = inject(FormBuilderTypesService);
  constructor(private elementRef: ElementRef) {
    super()
  }
}
