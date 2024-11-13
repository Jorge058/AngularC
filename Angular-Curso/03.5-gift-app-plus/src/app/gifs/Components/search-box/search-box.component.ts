import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

//? El tagInput es como un id en html, pero en angular se usa # en vez de id
//? Keyup enter sirve para que solo se ejecute cuando damos enter

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `
})
/*
? ViewChild sirve para tomar una referencia local
? y el viewchildren sirve para tomar varios elementos
*/
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

//Inyectamos el servicio de searchgifts
  constructor(private gifsService:GifsService) { }

  searchTag(){
    const newTag =this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
    
  }
}
