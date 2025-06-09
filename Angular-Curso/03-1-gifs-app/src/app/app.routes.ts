import { Routes } from '@angular/router';

//? El loadComponent es una promeas que nos servira para cargar el script solo
//? cuando este se llame, y no se cargue todo el desde un inicio. Tambien se puede
//?agregar al componente de la ruta un default despues del export. De esta manera
//? ya no se necesita agregar aqui el then

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./gifs/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending-page/trending-page.component'),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/search-page/search-page.component'),
      },
      //? Para enviar un argumento dinamico debemos agregar /:query
      {
        path: 'history/:query',
        loadComponent: () =>
          import('./gifs/pages/gif-history/gif-history.component'),
      },
      {
        path: '**',
        redirectTo: 'trending'
      }
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
