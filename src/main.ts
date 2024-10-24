import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {
  provideNgIconsConfig,
} from '@ng-icons/core';
bootstrapApplication(AppComponent, {
  providers: [
    appConfig.providers,
    provideNgIconsConfig({}),
  ],
}).catch((err) => console.error(err));
