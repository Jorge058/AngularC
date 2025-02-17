import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder:string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  /* Se encarga de hacer las emisiones del onkeypress */
  ngOnInit():void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  /*
    Se manda a llamar cuando la instancia del componente se destruye,
    siempre que usamos una suscripcion debemos terminarla, ya que de no hacerlo
    se estará escuchando indefinidamente
  */
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue( value:string ):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }
}
