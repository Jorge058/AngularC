import { Component, inject, signal } from '@angular/core';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);
  query = signal('');

/*
?La tercera forma para trabajar es con un RxResource,
?es lo mismo que el resource normal pero este trabaja
?con observable, no con async */

countryResource = rxResource({
    request: () => ({query: this.query()}),
    loader: ({request}) => {

      /* Comprobamos que retorne un observable de acuerdo al tipo de dato que enviamos  */
      if (!this.query) return of ([])
      return this.countryService.searchByCapital(request.query)

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
