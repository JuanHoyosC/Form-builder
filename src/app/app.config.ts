import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormlyExtension,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core';

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
import { SortablejsModule } from 'nxt-sortablejs';
import { InputFieldParagraphComponent } from './pages/form-builder/fields/input-field-paragraph/input-field-paragraph.component';
import { DividerComponent } from './pages/form-builder/wrappers/divider/divider.component';
import { FieldWrapperComponent } from './pages/form-builder/wrappers/fieldWrapper/fieldWrapper.component';

export const defaultLabelExtension: FormlyExtension = {
  prePopulate(field: FormlyFieldConfig): void {
    if (!field.props?.label) {
      field.props = { ...field.props, label: 'Default Label' };
    }
  },
};

export const defaultOptionsExtension: FormlyExtension = {
  prePopulate(field: FormlyFieldConfig): void {
    if (!field.props?.options) {
      field.props = {
        ...field.props,
        options: [
          {
            label: 'option 1',
            value: 'option 1',
          },
          {
            label: 'option 2',
            value: 'option 2',
          },
        ],
      };
    }
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom([
      FormlyModule.forRoot({
        extensions: [
          {
            name: 'default-label',
            extension: defaultLabelExtension,
          },
          {
            name: 'default-options',
            extension: defaultOptionsExtension,
          },
        ],
        types: [
          { name: 'calendar', component: InputFieldCalendarComponent },
          { name: 'checkbox', component: InputFieldCheckboxComponent },
          { name: 'email', component: InputFieldEmailComponent },
          { name: 'group', component: InputFieldGroupComponent },
          { name: 'number', component: InputFieldNumberComponent },
          { name: 'paragraph', component: InputFieldParagraphComponent },
          { name: 'password', component: InputFieldPasswordComponent },
          { name: 'radio', component: InputFieldRadioComponent },
          { name: 'tel', component: InputFieldTelComponent },
          { name: 'text', component: InputFieldTextComponent },
          { name: 'title', component: InputFieldTitleComponent },
        ],
        wrappers: [
          { name: 'divider', component: DividerComponent },
          { name: 'fieldWrapper', component: FieldWrapperComponent },
        ],
      }),
      BrowserModule,
      BrowserAnimationsModule,
      SortablejsModule.forRoot({
        animation: 150,
      }),
    ]),
  ],
};
