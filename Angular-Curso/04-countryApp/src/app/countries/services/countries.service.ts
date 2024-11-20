import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1'
  constructor(private http:HttpClient) { }

  /*
  ?Debemos especificarle a typescript el tipo de datos que se va a recibir en el observable
  ?para ello ponemos <Country[]> */

  searchCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

}
