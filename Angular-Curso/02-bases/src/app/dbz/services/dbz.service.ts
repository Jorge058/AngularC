import { Injectable } from '@angular/core';
/*
  ? Instalamos uuid que es una libreria para asignar indices a los elementos.
  * Instalamos como npm i uuid.
  ? Como es un archivo escrito en vanilla debemos instalar un entorno de desarrollo
  * Instalamos con npm i --save-dev @types/uuid
    */
import { v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

/*
  ?Injectable es un decorador que le dice a angular que es un servicio
  ? y que se puede injectar
*/
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name:' Krilin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  /*
  ? Creamos la funcion donde vamos a recibir el objeto
  ? de padre a hijo
  */

  onNewCharacter(character:Character):void{
    /*
    ? Utilizamos el spreed para que se genere un id en los nuevos objetos
    */
    const newCharacter: Character = {id: uuid(), ...character};
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
