import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './components/properties/properties.component';
import { ValidationsComponent } from './components/validations/validations.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DataComponent } from './components/data/data.component';
import { DialogModule } from 'primeng/dialog';
import { SettingService } from './services/setting.service';
import { FormBuilderTypesService } from '../../services/form-builder.service';
import { CustomFormlyFieldConfig } from '../../types/form-builder.types';
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
      if (!field) return;
      if (this.isSameFieldSelected(field)) return;
      this.settingService.initializeFormFieldSettings(structuredClone(field));
    });
  }

  isSameFieldSelected(field: CustomFormlyFieldConfig) {
    return this.settingService.form.get('id')?.value === field.id;
  }
}
