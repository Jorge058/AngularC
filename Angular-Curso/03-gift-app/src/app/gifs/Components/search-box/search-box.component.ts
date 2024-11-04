import { Component } from '@angular/core';

//? El tagInput es como un id en html, pero en angular se usa # en vez de id
//? Keyup enter sirve para que solo se ejecute cuando damos enter

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag(txtTagInput.value)"
    #txtTagInput
    >
  `
})

export class SearchBoxComponent {

  constructor() { }

  searchTag(newTag:string){
    console.log({newTag});
  }
}
