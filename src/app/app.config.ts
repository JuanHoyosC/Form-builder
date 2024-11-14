import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormlyModule,
} from '@ngx-formly/core';

import { routes } from './app.routes';
import { SortablejsModule } from 'nxt-sortablejs';
import { FORMLY_TYPES, FORMLY_EXTENSIONS, FORMLY_WRAPPERS } from './shared/form-fields.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom([
      FormlyModule.forRoot({
        extensions: FORMLY_EXTENSIONS,
        types: FORMLY_TYPES,
        wrappers: FORMLY_WRAPPERS,
      }),
      BrowserModule,
      BrowserAnimationsModule,
      SortablejsModule.forRoot({
        animation: 150,
      }),
    ]),
  ],
};
