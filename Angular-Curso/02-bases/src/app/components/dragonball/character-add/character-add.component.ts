import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  //? Este es el valor que vamos a compartir, debemos agregarle un output
  newCharacter = output<Character>();

  addCharacter(){
      if (!this.name() || !this.power() || +this.power() <= 0) {
        return;
      }

      const newCharacter: Character = {
        id:Math.floor(Math.random()*1000),
        name: this.name(),
        power: +this.power(),
      };

      /*
      ?Como no es recomendable trabajar con los metodos para las señales
      ?utilizamos el update para actualizar nuestra señal */
      //this.characters.update((list) => [...list, newCharacter]);

      //? Aqui es donde compartimos el valor, debemos agregarle un emit
      this.newCharacter.emit(newCharacter)
      this.resetFields();
    }

    resetFields() {
      this.name.set('');
      this.power.set(0);
    }
}
