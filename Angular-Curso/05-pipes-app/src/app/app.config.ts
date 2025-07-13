import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import { routes } from './app.routes';

/*
?Para hacer que nuestra app cambie de idioma debemos de hacer varias cosas.
* 1- Aqui importamos el idioma  que vamos a utilizar*/

import localEs from '@angular/common/locales/es-MX'
import localPl from '@angular/common/locales/pl'
import { LocaleService } from './services/locale.service';

/*
*2- Resgistramos el local en la variable registerLocalData
 */
registerLocaleData(localEs,'es');
registerLocaleData(localPl,'pl')

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    /*
    ?Para hacerlo dinamicamente debemos importar el servicio como una
    ?depenencia, luego debemos utilizar el useFactory que se utiliza para disparar
    ?el servicio cuando el provedor se inicializa*/
    {
      provide: LOCALE_ID,
      //useValue: 'pl'
      deps:[LocaleService],
      useFactory:(localeService: LocaleService) => localeService.getLocale,
    }
  ]
};
