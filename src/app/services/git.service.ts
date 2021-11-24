import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http:HttpClient) {

    if (localStorage.getItem("history")) {

      this._word = JSON.parse(localStorage.getItem("history")! ) ;

      this.response = JSON.parse(localStorage.getItem("result")!)

    }

   }

  private apikey:string ="HHqnft9S3gjCWnDLkCMS5myYrIusEjv3"

  private _word:string [] = []

  public response:any [] =[]

  get history () {
    return this._word
  }

  addSearch (word:string) {

    word = word.toLowerCase()

    if (!this._word.includes(word)) {

      this._word.unshift(word)
      this._word = this._word.splice(0,10)

      localStorage.setItem("history",JSON.stringify(this._word))



    }

    const url = "https://api.giphy.com/v1/gifs/search"

    const params = new HttpParams()
      .set("api_key",this.apikey)
      .set("q",word)
      .set("limit",30)

    //this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apikey}&q=${word}&limit=30`)
    this.http.get(`${url}`,{params}) //^ if the object the key and value is equal (params:params) not is need put the value, only key
      .subscribe((res:any) => {
        this.response = res.data
        localStorage.setItem("result",JSON.stringify(res.data))
      })

  }
}
