import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  gifService = inject(GifService);
  /*
  ?El activatedRoute nos sirve para recibir la ruta activa y sus parametros.
  ?El cual nos servira para mostrar gifs dependiendo del parametro de la ruta

  ?Para no usar la sintaxis con suscribe
  *query = inject(ActivatedRoute).params.subscribe((params)=>{
    *console.log(params);
  *});
  ?usamos un tosignal
   */
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
