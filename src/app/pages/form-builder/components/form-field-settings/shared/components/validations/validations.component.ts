import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormlyFieldProps } from '@ngx-formly/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CustomFormlyFieldProps } from '../../../../../interfaces/form-builder';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-validations',
  standalone: true,
  imports: [CommonModule, FormsModule, InputSwitchModule, InputTextModule, PanelModule],
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.scss'
})
export class ValidationsComponent {
  @Input() props!: FormlyFieldProps & CustomFormlyFieldProps;
}
