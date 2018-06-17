import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {Element} from '../element';


@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent implements OnInit {

  searchTerm: string = 'deadpool'
  resultSet: Array<Element>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.resultSet = this.movieService.getMovies(this.searchTerm, 'movies')

    console.log(this.resultSet)
  }

}
