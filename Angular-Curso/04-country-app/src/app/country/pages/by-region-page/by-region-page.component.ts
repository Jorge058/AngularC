import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Region } from '../../interfaces/region.type';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam:string):Region {
  queryParam= queryParam.toLowerCase();

  const validRegions: Record<string, Region> = {
    africa: 'Africa',
    americas:'Americas',
    asia:'Asia',
    europe:'Europe',
    oceania:'Oceania',
    antarctic:'Antarctic'
  }

  return validRegions[queryParam] ?? 'Americas';

}

@Component({
  selector: 'by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  countryService = inject(CountryService);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = (this.activatedRoute.snapshot.queryParamMap.get('query') ?? '');

  selectedRegion = linkedSignal<Region>(() => validateQueryParam(this.queryParam));

  countryResource = rxResource({
    request: () => ({region: this.selectedRegion()}),
    loader: ({request}) => {

      /* Comprobamos que retorne un observable de acuerdo al tipo de dato que enviamos  */
      if (!request.region) return of ([]);
          this.router.navigate(['/country/by-region'],{
          queryParams: {
            region:request.region,
          }
      })
      return this.countryService.searchByRegion(request.region);
    },
  });
}
