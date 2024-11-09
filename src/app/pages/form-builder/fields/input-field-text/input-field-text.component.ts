import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputTextModule } from 'primeng/inputtext';
import { LabelTooltipComponent } from '../../../../shared/components/label-tooltip/label-tooltip.component';
import { FieldDescriptionComponent } from '../../../../shared/components/field-description/field-description.component';


@Component({
  selector: 'app-input-field-text',
  standalone: true,
  imports: [CommonModule, FieldDescriptionComponent, InputTextModule, LabelTooltipComponent, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-text.component.html',
  styleUrl: './input-field-text.component.css'
})
export class InputFieldTextComponent extends FieldType<FieldTypeConfig> {}