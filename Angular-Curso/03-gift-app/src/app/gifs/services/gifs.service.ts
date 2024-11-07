import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  ? El provideIn permite usar el servicio en toda la aplicacion.
  ? Si no lo usamos debemos de proveer el servicio mediante el comando providers
  ? en el module.ts
*/
@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey = 'pACkLqaDHy0gPYQL6RHyGfxjgX1KnoDV';
  private serviceUrl = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag)=> oldTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);
  }

  searchTag(tag:string):void{
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit','10')
        .set('q',tag)

    this.http.get(`${ this.serviceUrl }/search`, {params})
    .subscribe(resp => {
    console.log(resp);
    });
  }
}
