import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})

export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  public cacheStorage: CacheStore = {
    byCapital:    {term: '', countries:[]},
    byCountries:  {term: '', countries:[]},
    byRegion:     {region: '', countries:[]}
  }

  constructor(private http:HttpClient) { }

  private getCountriesRequest(url:string):Observable<Country[]> {
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of ([])),
    )
  }

  /*
  ?Debemos especificarle a typescript el tipo de datos que se va a recibir en el observable
  ?para ello ponemos <Country[]>
  */

  /*
    *A nuestra peticion le ponemos un pipe catcherror para cuando se busque algo que no esta y no regrese un error
    *le adjuntamos un of para meterle un arreglo vacio
  */
  /*
    ?Para recuperar la data le ponemos un tap al pipe, esto con la finalidad de obtener los datos
    ?pero sin alterar los datos obtenidos
  */
  searchCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
        .pipe(
          tap(countries => this.cacheStorage.byCapital = {term, countries})
        );
  }

  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url);
  }

  searchRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url);
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
