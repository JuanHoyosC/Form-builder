import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomFormlyFieldConfig } from '../../interfaces/form-builder';
import { PropertiesComponent } from './shared/components/properties/properties.component';
import { ValidationsComponent } from './shared/components/validations/validations.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { DataComponent } from './shared/components/data/data.component';
import { DialogModule } from 'primeng/dialog';
import { SettingService } from './setting.service';
import { FormBuilderTypesService } from '../../services/form-builder.service';
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
  visible: boolean = true;

  constructor() {
    this.formBuilderTypesService.$selectedField.subscribe((field) => {
      const selectedField = field as CustomFormlyFieldConfig;
      if (selectedField) {
        this.settingService.initializeFormFieldSettings(structuredClone(selectedField));
      }
    });
  }
  
}
