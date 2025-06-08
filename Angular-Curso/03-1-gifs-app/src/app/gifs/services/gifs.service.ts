import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../gif.mapper';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  constructor() {
    this.loadTrendingGigs();
  }

  /*
  ?Para obtener una respuesta siempre debemos de suscribirnos */

  loadTrendingGigs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending?`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
        console.log(gifs);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
      });
  }
  /*
?Aqui es donde retornamos directamente el valor delsearchgift y lo mapeamos para mandar
?un arreglo valido. Al final nos suscribimos a el en searchpageComponent
 */
  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search?`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemToGifArray(items))
      );
  }
}
