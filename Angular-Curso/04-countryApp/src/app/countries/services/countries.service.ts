import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1'
  constructor(private http:HttpClient) { }

  /*
  ?Debemos especificarle a typescript el tipo de datos que se va a recibir en el observable
  ?para ello ponemos <Country[]> */

  /*
    *A nuestra peticion le ponemos un pipe catcherror para cuando se busque algo que no esta y no regrese un error
    *le adjuntamos un of para meterle un arreglo vacio
  */

  searchCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
  }

  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
  }

  searchRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
  }

  searchCountryByAlphaCode(code:string):Observable<Country | null> {

    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
          map(countries => countries.length > 0 ? countries[0]: null),
          catchError(() => of(null))
      );
  }
}
