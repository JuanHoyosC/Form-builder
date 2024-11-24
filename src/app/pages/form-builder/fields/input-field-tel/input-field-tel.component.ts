import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { InputMaskModule } from 'primeng/inputmask';
import { CommonModule } from '@angular/common';
import { CountryISO,  IntlInputTelComponent } from 'p-intl-input-tel';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PhoneNumberFormat } from 'google-libphonenumber';
@Component({
  selector: 'app-input-field-tel',
  standalone: true,
  imports: [ CommonModule, InputMaskModule, IntlInputTelComponent, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-tel.component.html',
  styleUrl: './input-field-tel.component.scss'
})
export class InputFieldTelComponent extends FieldType<FieldTypeConfig> {
  public readonly CountryISO = CountryISO;
  public readonly PhoneNumberFormat = PhoneNumberFormat;
  public readonly SearchCountryField = SearchCountryField;

  public separateDialCode = true;
  public favoriteCountries: CountryISO[] = [];
  public phone = new FormControl({ value: '', disabled: false }, [ Validators.required ]);
}

export enum SearchCountryField {
  DIALCODE = 'dialCode',
  ISO2 = 'iso2',
  NAME = 'name',
};