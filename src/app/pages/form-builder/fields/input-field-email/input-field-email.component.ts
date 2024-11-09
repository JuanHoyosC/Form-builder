import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import {InputTextModule} from 'primeng/inputtext';
import { LabelTooltipComponent } from '../../../../shared/components/label-tooltip/label-tooltip.component';
import { FieldDescriptionComponent } from '../../../../shared/components/field-description/field-description.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-input-field-email',
  standalone: true,
  imports: [CommonModule, FieldDescriptionComponent, InputTextModule, LabelTooltipComponent, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-email.component.html',
  styleUrl: './input-field-email.component.css'
})
export class InputFieldEmailComponent extends FieldType<FieldTypeConfig> {}
