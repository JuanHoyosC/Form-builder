import { Component, inject } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { LabelTooltipComponent } from '../../../../../../../shared/components/label-tooltip/label-tooltip.component';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormlyFieldConfig,
} from '@ngx-formly/core';
import { InputOptionsComponent } from '../../../../../../../shared/components/input-options/input-options.component';
import { DropdownModule } from 'primeng/dropdown';
import { SettingService } from '../../../setting.service';
import { FormlyOptionsPipe } from '../../../../../pipes/formly-options.pipe';
import { DefaulltFieldComponent } from '../default-field/default-field.component';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    DefaulltFieldComponent,
    FormlyOptionsPipe,
    InputOptionsComponent,
    InputTextModule,
    LabelTooltipComponent,
    MultiSelectModule,
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
