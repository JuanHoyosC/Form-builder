import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { LabelTooltipComponent } from '../../../../../../../shared/components/label-tooltip/label-tooltip.component';
import { SettingService } from '../../../setting.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-validations',
  standalone: true,
  imports: [
    CalendarModule,
    CommonModule,
    InputSwitchModule,
    InputTextModule,
    LabelTooltipComponent,
    ReactiveFormsModule,
    PanelModule,
  ],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.scss',
})
export class ValidationsComponent {
  public settingService = inject(SettingService);
}
