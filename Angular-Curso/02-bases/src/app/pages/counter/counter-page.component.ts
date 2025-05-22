import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
    padding: 5px,
    margin: 5px 10px,
    width: 75px;
  }
  `,
})

export class CounterPageComponent{
  counter = 0;

  //todo: señales son metodos o funciones
  counterSignal = signal(10);


  increaseby(value:number){
    this.counter+= value;

    this.counterSignal.update((current) => current + value);
    
  }

  reset(){
    this.counter = 0

    // todo: para señales
    this.counterSignal.set(0)
  }
}
