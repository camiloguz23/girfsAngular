import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPagesComponent } from './gif-pages/gif-pages.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    GifPagesComponent,
    SearchComponent,
    ResultComponent
  ],

  exports:[
    GifPagesComponent
  ],

  imports: [
    CommonModule
  ]
})
export class GifModule { }
