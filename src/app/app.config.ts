import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyExtension, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

import { routes } from './app.routes';
import { InputFieldTextComponent } from './pages/form-builder/fields/input-field-text/input-field-text.component';
import { InputFieldCheckboxComponent } from './pages/form-builder/fields/input-field-checkbox/input-field-checkbox.component';
import { InputFieldEmailComponent } from './pages/form-builder/fields/input-field-email/input-field-email.component';
import { InputFieldNumberComponent } from './pages/form-builder/fields/input-field-number/input-field-number.component';
import { InputFieldPasswordComponent } from './pages/form-builder/fields/input-field-password/input-field-password.component';
import { InputFieldRadioComponent } from './pages/form-builder/fields/input-field-radio/input-field-radio.component';
import { InputFieldTelComponent } from './pages/form-builder/fields/input-field-tel/input-field-tel.component';
import { InputFieldTitleComponent } from './pages/form-builder/fields/input-field-title/input-field-title.component';
import { InputFieldCalendarComponent } from './pages/form-builder/fields/input-field-calendar/input-field-calendar.component';
import { InputFieldGroupComponent } from './pages/form-builder/fields/input-field-group/input-field-group.component';
import { SortablejsModule } from 'nxt-sortablejs'
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom([
      FormlyModule.forRoot({
        extensions: [
          {
            name: 'default-label',
            extension: {
              prePopulate(field: FormlyFieldConfig): void {
                if (field.props?.label) {
                  return;
                }
                field.props = {
                  ...field.props,
                  label: 'Default Label'
                }
              },
            }
          }
        ],
        types: [
          { name: 'calendar', component: InputFieldCalendarComponent },
          { name: 'checkbox', component: InputFieldCheckboxComponent },
          { name: 'email', component: InputFieldEmailComponent },
          { name: 'group', component: InputFieldGroupComponent },
          { name: 'number', component: InputFieldNumberComponent },
          { name: 'password', component: InputFieldPasswordComponent },
          { name: 'radio', component: InputFieldRadioComponent },
          { name: 'tel', component: InputFieldTelComponent },
          { name: 'text', component: InputFieldTextComponent },
          { name: 'title', component: InputFieldTitleComponent },
        ],
      }),
      BrowserModule,
      BrowserAnimationsModule,
      SortablejsModule.forRoot({
        animation: 150,
        
    })
    ]),
  ],
};

export const defaultLabelExtension: FormlyExtension = {
  prePopulate(field: FormlyFieldConfig): void {
    field = {
      id: crypto.randomUUID(),
      ...field
    }
    if (field.props?.label) {
      return;
    }
    field.props = {
      ...field.props,
      label: 'Default Label'
    }
  },
}
