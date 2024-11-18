import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-field-calendar',
  standalone: true,
  imports: [CalendarModule, CommonModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-calendar.component.html',
  styleUrl: './input-field-calendar.component.css'
})
export class InputFieldCalendarComponent extends FieldType<FieldTypeConfig> {} 
