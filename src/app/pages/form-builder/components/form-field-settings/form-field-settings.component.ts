import { Component, inject, Input, OnChanges } from '@angular/core';
import { FormBuilderTypesService } from '../../services/form-builder.service';
import { FormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyFieldProps, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { CustomFormlyFieldProps } from '../../interfaces/form-builder';
import { PropertiesComponent } from './shared/components/properties/properties.component';
import { ValidationsComponent } from './shared/components/validations/validations.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { DataComponent } from './shared/components/data/data.component';
import { DialogModule } from 'primeng/dialog';
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
    ValidationsComponent,
    FormlyModule
  ],
  providers: [],
  templateUrl: './form-field-settings.component.html',
  styleUrl: './form-field-settings.component.scss',
})
export class FormFieldSettingsComponent implements OnChanges {
  @Input() field: FormlyFieldConfig | undefined = undefined;
  public formBuilderTypesService = inject(FormBuilderTypesService);
  props!: FormlyFieldProps & CustomFormlyFieldProps;
  visible: boolean = true;

  ngOnChanges(): void {
    if (this.field?.props) {
      this.props = this.field?.props;
    }
  }
}