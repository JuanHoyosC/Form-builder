import { Component, inject } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormlyFieldConfig,
} from '@ngx-formly/core';

import { DefaulltFieldComponent } from '../index';
import { LabelTooltipComponent } from '../../../../../../shared/components/label-tooltip/label-tooltip.component';
import { InputOptionsComponent } from '../../../../../../shared/components/input-options/input-options.component';
import { SettingService } from '../../services/setting.service';

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
  defaultField: FormlyFieldConfig | undefined = undefined;
  public readonly settingService = inject(SettingService);

  changeDefaultValue({defaultValue}: any) {
   this.settingService.form.get('defaultValue')?.setValue(defaultValue);
  }
}
