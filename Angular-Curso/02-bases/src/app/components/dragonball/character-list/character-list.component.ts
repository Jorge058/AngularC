import { Component, input } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  characters = input.required();

}
