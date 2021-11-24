import { Component, ElementRef, ViewChild } from '@angular/core';
import { GitService } from '../../services/git.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service_gif:GitService) { }

  @ViewChild("text") textsearch!:ElementRef<HTMLInputElement>

  search(texto:string) {

    const valor = this.textsearch.nativeElement.value
    if (valor.trim().length) {
      this.service_gif.addSearch(valor)
      this.textsearch.nativeElement.value=""

    }



  }

}
