import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CheckboxModule } from 'primeng/checkbox';
import { LabelTooltipComponent } from '../../../../shared/components/label-tooltip/label-tooltip.component';
import { FieldDescriptionComponent } from '../../../../shared/components/field-description/field-description.component';
import { CommonModule } from '@angular/common';
import { FormlySelectModule } from '@ngx-formly/core/select';
@Component({
  selector: 'app-input-field-multicheckbox',
  standalone: true,
  imports: [CheckboxModule, CommonModule, FieldDescriptionComponent, FormlySelectModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-multicheckbox.component.html',
  styleUrl: './input-field-multicheckbox.component.scss'
})
export class InputFieldMultiCheckboxComponent extends FieldType<FieldTypeConfig> {}