import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Element } from './element'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apikey= '8625bfd7'
  urlData = `http://www.omdbapi.com/?apikey=${this.apikey}`

  constructor(private http: HttpClient) { }

  getMovies(search:string, type:string){

    let ret: Array<Element> = []

    this.http.get(this.urlData+`&s=${search}`).subscribe((data:any)=>{

      data.Search.forEach(result => {
        ret.push(
          new Element(
            result.imbdID,
            result.Title,
            result.Year,
            result.Poster
          )
        )

      });
    })

    return ret
  }

}
