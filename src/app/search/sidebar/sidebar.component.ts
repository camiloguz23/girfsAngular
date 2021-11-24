import { Component } from '@angular/core';
import { GitService } from '../../services/git.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private service_gif:GitService) { }

  get word () {
    return this.service_gif.history
  }


  selectGifs (text:string) {
    this.service_gif.addSearch(text)
  }



}
