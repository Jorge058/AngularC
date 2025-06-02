import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

interface Character{
  id:number,
  name: string,
  power: number
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})


export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name:'Goku', power:9001},
    {id: 2, name:'Vegeta', power:9000},
  ]);

  /*
  ? Aqui recibimos el valor del output del addcharacter y lo agregamos a la lista
   */
  addCharacter(character:Character){
    this.characters.update((list) => [...list, character])
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}

