import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelTooltipComponent } from '../../../../shared/components/label-tooltip/label-tooltip.component';
import { FieldDescriptionComponent } from '../../../../shared/components/field-description/field-description.component';
@Component({
  selector: 'app-input-field-radio',
  standalone: true,
  imports: [
    CommonModule,
    FieldDescriptionComponent,
    FormlySelectModule,
    LabelTooltipComponent,
    RadioButtonModule,
    ReactiveFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-radio.component.html',
  styleUrl: './input-field-radio.component.scss',
})
export class InputFieldRadioComponent extends FieldType<FieldTypeConfig> {}
