import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
//? Hacemos una injection para jalar el servicio de personajes y que no este
//? al descubierto. Por lo que ahora es mas seguro. Y se convierte en una propiedad del servicio
  constructor( public dbzService: DbzService ){
    dbzService.characters
  }
}
