/* Creamos nuestro propio modulo y lo exportamos, de esta manera podemos usarlo
en el scope que estamos usando */
import { NgModule } from "@angular/core";
import { CounterComponent } from "./Components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    /* Exportamos el modulo, de esta manera podemos usarlo en un entorno fuera
    del scope */
    CounterComponent
  ]
})

export class CounterModule {}
