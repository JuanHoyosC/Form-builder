import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CalendarModule } from 'primeng/calendar';
import { LabelTooltipComponent } from '../../../../shared/components/label-tooltip/label-tooltip.component';
import { FieldDescriptionComponent } from '../../../../shared/components/field-description/field-description.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-input-field-calendar',
  standalone: true,
  imports: [CalendarModule, CommonModule, FieldDescriptionComponent, LabelTooltipComponent],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-calendar.component.html',
  styleUrl: './input-field-calendar.component.css'
})
export class InputFieldCalendarComponent extends FieldType<FieldTypeConfig> {} 
