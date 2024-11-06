import { Injectable } from '@angular/core';

/*
  ? El provideIn permite usar el servicio en toda la aplicacion.
  ? Si no lo usamos debemos de proveer el servicio mediante el comando providers
  ? en el module.ts
*/
@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = []

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  public searchTag(tag:string):void{
    this._tagsHistory.unshift(tag);
  }


}
