import { Injectable } from '@angular/core';
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
    name:' Krilin',
    power: 1000
  },{
    name:'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }];

  /* Creamos la funcion donde vamos a recibir el objeto
  de padre a hijo */

  onNewCharacter(character:Character):void{
    this.characters.push(character);
  }

  onDeleteCharacter(index:number){
    this.characters.splice(index, 1)
  }
}
