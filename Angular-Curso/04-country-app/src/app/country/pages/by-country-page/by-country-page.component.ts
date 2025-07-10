import { Component, inject, linkedSignal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'by-country-page',
  imports: [CountryListComponent, SearchInputComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam =this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal( ()=>this.queryParam);

  countryResource = rxResource({
    request: () => ({query: this.query()}),
    loader: ({request}) => {

      /* Comprobamos que retorne un observable de acuerdo al tipo de dato que enviamos  */
      if (!this.query) return of ([])
        this.router.navigate(['/country/by-country'],{
          queryParams: {
            query:request.query,
          }
      })

      return this.countryService.searchByCountry(request.query)

    },
  });
}
