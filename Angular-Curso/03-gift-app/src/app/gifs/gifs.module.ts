import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './Components/search-box/search-box.component';
import { CardListComponent } from './Components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    HomePageComponent

  ]
})
export class GifsModule {}
