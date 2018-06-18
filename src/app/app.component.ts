import { Component } from '@angular/core';
import {Element} from './element';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resultSet: Array<Element>
  searchTerm:string = 'deadpool'

  constructor (private movieService: MovieService) {}

  ngOnInit() {
    this.search()
  }

  sendValue(term){
    this.searchTerm = term;
    this.search()
  }
  
  search(){
    this.resultSet = this.movieService.getMovies(this.searchTerm)
    // console.log(this.resultSet)
  }

}
