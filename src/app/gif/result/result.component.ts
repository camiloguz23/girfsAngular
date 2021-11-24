import { Component } from '@angular/core';
import { GitService } from '../../services/git.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  {

  constructor(private result:GitService) { }

  get data () {
    return this.result.response
  }

  

}
