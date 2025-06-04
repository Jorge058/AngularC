import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';


@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})

export class DragonballSuperPageComponent {
/*
  ?Anteriormente se inyectaba el servicio mientras el constructor,
    constructor(public dragonballService:DragonBallService){}

  ?ahora se utiliza el inject de angular core y se guarda en una variable
 */
  public dragonballService = inject(DragonBallService);


}

