import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomFormlyFieldConfig } from '../../types/form-builder.types';
import { DialogModule } from 'primeng/dialog';
import { SettingService } from './services/setting.service';
import { FormBuilderTypesService } from '../../services/form-builder.service';
import {
  DataComponent,
  LayoutComponent,
  PropertiesComponent,
  ValidationsComponent,
} from './components/index';
@Component({
  selector: 'app-form-field-settings',
  standalone: true,
  imports: [
    CommonModule,
    DataComponent,
    DialogModule,
    FormsModule,
    LayoutComponent,
    PropertiesComponent,
    ReactiveFormsModule,
    ValidationsComponent,
  ],
  providers: [],
  templateUrl: './form-field-settings.component.html',
  styleUrl: './form-field-settings.component.scss',
})
export class FormFieldSettingsComponent {
  public readonly settingService = inject(SettingService);
  public readonly formBuilderTypesService = inject(FormBuilderTypesService);
  visible = true;

  constructor() {
    this.formBuilderTypesService.$selectedField.subscribe((field) => {
      const selectedField = field as CustomFormlyFieldConfig;
      if (this.isSameFieldSelected(selectedField)) return;
      console.log('entro aqui');

      if (selectedField) {
        this.settingService.initializeFormFieldSettings(
          structuredClone(selectedField)
        );
      }
    });
  }

  isSameFieldSelected(field: CustomFormlyFieldConfig) {
    return this.settingService.form.get('id')?.value === field.id;
  }
}
