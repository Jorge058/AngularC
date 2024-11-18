import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

/*
  ?Este modulo sirve para darle rutas a la pagina, es decir que al iniciar la pagina
  ?en este caso nos va a redirigir a la pagina home.
  ?Si el path es home entonces va a utilizar el componente home
*/
const routes:Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]
/*
  ?En este caso se esta utilizando el routing inicial por lo que usamos forRoot, si fuera
  ? un routing diferente entonces usariamos el forchild.
*/
@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
