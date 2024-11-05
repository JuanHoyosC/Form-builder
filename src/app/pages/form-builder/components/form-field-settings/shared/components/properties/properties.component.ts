import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormlyFieldProps } from '@ngx-formly/core';
import { PanelModule } from 'primeng/panel';
import { CustomFormlyFieldProps } from '../../../../../interfaces/form-builder';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, InputTextareaModule, PanelModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {
  @Input() props!: FormlyFieldProps & CustomFormlyFieldProps;
}
