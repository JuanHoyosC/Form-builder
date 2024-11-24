import { Component, inject } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { LabelTooltipComponent } from '../../../../../../shared/components/label-tooltip/label-tooltip.component';
import { InputOptionsComponent } from '../../../../../../shared/components/input-options/input-options.component';
import { SettingService } from '../../services/setting.service';
import { CustomFormlyFieldConfig } from '../../../../types/form-builder.types';
import { DefaulltFieldComponent } from '../default-field/default-field.component';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    CommonModule,
    DefaulltFieldComponent,
    InputOptionsComponent,
    InputTextModule,
    LabelTooltipComponent,
    PanelModule,
    ReactiveFormsModule,
  ],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss',
})
export class DataComponent {
  defaultField: CustomFormlyFieldConfig | undefined = undefined;
  public readonly settingService = inject(SettingService);
}
