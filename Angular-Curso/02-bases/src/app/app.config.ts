import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }
  ]

  /* HashStrategy
  * Como nuestro proyecto tiene muchas rutas, al subirlo a una pagina no se
  *reconocen las rutas, por lo que debemos agregar el locationstrategy para que podamos utlizar
  *sin problema todas las rutas.
  */

};
