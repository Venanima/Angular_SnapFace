import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import {registerLocaleData} from "@angular/common";
import localFR from '@angular/common/locales/fr';
registerLocaleData(localFR, 'fr');


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    {provide: LOCALE_ID, useValue: 'fr-FR'}]
};
