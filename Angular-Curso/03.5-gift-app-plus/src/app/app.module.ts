import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GifsModule,
    SharedModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
