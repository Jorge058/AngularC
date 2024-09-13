import { Component } from "@angular/core";

/* Hacemos que nuestra clase sea un componente con un decorador */
@Component({
  selector: 'app-counter',
  template: `
  
  <hr>
  <h3> {{counter}} </h3>

  <!-- Le agregamos la propiedad click a nuestro elemento
  y ademas le asignamos el metodo para incrementar -->
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent{
  public counter: number = 10;

  increaseBy(value: number):void{
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 10
  }
}


