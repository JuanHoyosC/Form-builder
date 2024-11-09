import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';
import { PanelModule } from 'primeng/panel';
import { CustomFormlyFieldProps } from '../../../../../interfaces/form-builder';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LabelTooltipComponent } from '../../../../../../../shared/components/label-tooltip/label-tooltip.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, InputTextareaModule, LabelTooltipComponent, PanelModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {
  @Input() props!: FormlyFieldProps & CustomFormlyFieldProps;
  @Input() field: FormlyFieldConfig | undefined = undefined;
}
