import { Component, inject, Input, OnChanges } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PanelModule } from 'primeng/panel';
import { FormBuilderTypesService } from '../../services/form-builder.service';
import { FormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { CustomFormlyFieldProps } from '../../interfaces/form-builder';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroBars3,
  heroBars3BottomLeft,
  heroBars3BottomRight,
  heroBars4,
  heroBold,
  heroH1,
  heroH2,
  heroH3,
  heroItalic,
  heroStrikethrough,
  heroUnderline,
} from '@ng-icons/heroicons/outline';
import { PropertiesComponent } from './shared/components/properties/properties.component';
import { ValidationsComponent } from './shared/components/validations/validations.component';

@Component({
  selector: 'app-form-field-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PropertiesComponent,
    InputTextModule,
    InputSwitchModule,
    NgIconComponent,
    SelectButtonModule,
    ValidationsComponent,
    PanelModule,
  ],
  providers: [
    provideIcons({
      heroBars3BottomLeft,
      heroBars3BottomRight,
      heroBars4,
      heroBars3,
      heroUnderline,
      heroItalic,
      heroBold,
      heroH1,
      heroH2,
      heroH3,
      heroStrikethrough,
    }),
  ],
  templateUrl: './form-field-settings.component.html',
  styleUrl: './form-field-settings.component.css',
})
export class FormFieldSettingsComponent implements OnChanges {
  @Input() field: FormlyFieldConfig | undefined = undefined;
  public formBuilderTypesService = inject(FormBuilderTypesService);
  props!: FormlyFieldProps & CustomFormlyFieldProps;

  ngOnChanges(): void {
    this.field = this.formBuilderTypesService.selectedField();
    if (this.field?.props) {
      this.props = this.field?.props;
    }
  }

  justifyOptions: Option[] = [
    { icon: 'heroBars3BottomLeft', value: 'Left' },
    { icon: 'heroBars3', value: 'Center' },
    { icon: 'heroBars4', value: 'Justify' },
    { icon: 'heroBars3BottomRight', value: 'Right' },
  ];

  stateOptions: Option[] = [
    { icon: 'heroH1', value: 'h1' },
    { icon: 'heroH2', value: 'h2' },
    { icon: 'heroH3', value: 'h3' },
  ];

  textOptions: Option[] = [
    { icon: 'heroBold', value: 'bold', disabled: false },
    { icon: 'heroUnderline', value: 'underline', disabled: false },
    { icon: 'heroItalic', value: 'italic', disabled: false },
    { icon: 'heroStrikethrough', value: 'strikethrough', disabled: false },
  ];

  value = 'off';

  a(e: {value: string[]}) {
    if(!this.field?.props) return;
    this.textOptions[3].disabled = e.value.includes('underline');
    this.textOptions[1].disabled = e.value.includes('strikethrough');
    for(const textOption of this.textOptions) { 
      const key: string = textOption.value;
      this.field.props[key] = e.value.includes(textOption.value);
    }

    this.formBuilderTypesService.fields.set({...this.formBuilderTypesService.fields()})
  }
}


interface Option {
  icon: string;
  value: string;
  disabled?: boolean;
}