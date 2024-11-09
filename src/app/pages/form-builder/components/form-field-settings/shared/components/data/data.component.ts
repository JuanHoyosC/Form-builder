import { Component, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { LabelTooltipComponent } from '../../../../../../../shared/components/label-tooltip/label-tooltip.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';
import { CustomFormlyFieldProps } from '../../../../../interfaces/form-builder';
import { InputOptionsComponent } from '../../../../../../../shared/components/input-options/input-options.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    InputOptionsComponent,
    FormlySelectModule,
    LabelTooltipComponent,
    MultiSelectModule,
    PanelModule,
  ],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss',
})
export class DataComponent {
  @Input() props!: FormlyFieldProps & CustomFormlyFieldProps;
  @Input() field: FormlyFieldConfig | undefined = undefined;
}
