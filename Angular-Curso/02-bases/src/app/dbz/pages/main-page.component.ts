import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
// ? Hacemos una injection para jalar el servicio de personajes y que no este
//? al descubierto. Por lo que ahora es mas seguro. Y se convierte en una propiedad del servicio

/*
  * Haemos aun mas seguro el codigo utilizando el private, para que no se pueda
  * acceder a los datos desde fuera. Le creamos metodos y un get para jalar los datos
 */
  constructor( private dbzService: DbzService ){}

  // ?Agregamos un spreed para que obtengamos un arreglo nuevo y asi no hacer modificaciones al obtener el arreglo original
    get characters(): Character[] {
      return [...this.dbzService.characters]
    }

    onDeleteCharacter (id: string):void{
      this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter(character:Character):void{
      this.dbzService.addCharater(character)
    }
}
