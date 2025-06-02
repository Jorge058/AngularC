import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  imports: [
    //NgClass
  ],
  templateUrl: './dragonball-page.component.html'
})


export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name:'Goku', power:9001},
    /* {id: 2, name:'Vegeta', power:9000},
    {id: 3, name:'Piccolo', power:7000},
    {id: 4, name:'Yamcha', power:500} */
  ]);

  addCharacter(){
    if (!this.name() || !this.power() || +this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: +this.power(),
    };

    /*
    ?Como no es recomendable trabajar con los metodos para las señales
    ?utilizamos el update para actualizar nuestra señal */
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  /* powerClasses = computed(()=> {
    return {
      'text-danger': true,
      }
  }) */

}

