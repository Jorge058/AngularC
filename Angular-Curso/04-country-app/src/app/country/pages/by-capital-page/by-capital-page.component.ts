import { Component, inject, signal } from '@angular/core';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = signal(this.queryParam);
/*
?La tercera forma para trabajar es con un RxResource,
?es lo mismo que el resource normal pero este trabaja
?con observable, no con async */

countryResource = rxResource({
    request: () => ({query: this.query()}),
    loader: ({request}) => {

      /* Comprobamos que retorne un observable de acuerdo al tipo de dato que enviamos  */
      if (!request.query) return of ([]);
      /*
      ?Ademas, para navegar a rutas que queremos crear dependiendo la busqueda, podemos
      ?agregar al navigate, extras, por ejemplo aqui solo agregaremos uno que sea el
      ?query que buscamos
      */
      this.router.navigate(['/country/by-capital'],{
        queryParams: {
          query: request.query
        }
      })


      return this.countryService.searchByCapital(request.query);
    },
  })

/*
? Utilizamos un Resource para obtener una respuesta y un loader, el cual
?se va a encargar de hacer la peticion al servicio y evitamos hacer codigo
?tradicional
 */
  /* countryResource = resource({
    request: () => ({query: this.query()}),
    loader: async({request}) => {
      if (!this.query) return []

      /* First value permite transformar cualquier obserbable en promesas */
      /* return await firstValueFrom(
        this.countryService.searchByCapital(request.query)
      )
    }
  })
 */


  /* Forma traicional para manejar la respuesta

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(err)
      },
    },
  );
  } */
}
