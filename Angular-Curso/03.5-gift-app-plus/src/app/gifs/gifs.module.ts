import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './Components/search-box/search-box.component';
import { CardListComponent } from './Components/card-list/card-list.component';
import { CardComponent } from './Components/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent

  ]
})
export class GifsModule {}
