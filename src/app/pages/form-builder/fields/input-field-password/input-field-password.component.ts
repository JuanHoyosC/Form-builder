import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PasswordModule } from 'primeng/password';
import { LabelTooltipComponent } from '../../../../shared/components/label-tooltip/label-tooltip.component';
import { FieldDescriptionComponent } from '../../../../shared/components/field-description/field-description.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field-password',
  standalone: true,
  imports: [CommonModule, FieldDescriptionComponent, LabelTooltipComponent, PasswordModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-password.component.html',
  styleUrl: './input-field-password.component.css'
})
export class InputFieldPasswordComponent extends FieldType<FieldTypeConfig> {}