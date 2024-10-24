import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
/* Cuando queremos exportar de un modulo padre a uno hijo
debemos de indicar con un decorador @input() */
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index:number):void{
    //TODO: Emitir el indice del personje
    this.onDelete.emit(index)
  }

}
