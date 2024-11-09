import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CheckboxModule } from 'primeng/checkbox';
import { LabelTooltipComponent } from '../../../../shared/components/label-tooltip/label-tooltip.component';
import { FieldDescriptionComponent } from '../../../../shared/components/field-description/field-description.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-input-field-checkbox',
  standalone: true,
  imports: [CheckboxModule, CommonModule, FieldDescriptionComponent, LabelTooltipComponent, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-checkbox.component.html',
  styleUrl: './input-field-checkbox.component.scss'
})
export class InputFieldCheckboxComponent extends FieldType<FieldTypeConfig> {}