import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { GifModule } from './gif/gif.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    HttpClientModule,
    GifModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
