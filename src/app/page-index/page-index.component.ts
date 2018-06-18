import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import {Element} from '../element';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent {

  @Input() searchTerm: string;
  @Input() resultSet: Array<Element>;

  constructor() { }



  getMovies(){
    return this.resultSet.filter(elm => elm.getType() == 'movie' )
  }

  getSeries (){
    return this.resultSet.filter(elm => elm.getType() == 'series' )
  }

  getOtros (){
    return this.resultSet.filter(elm => elm.getType() == 'game' )
  }

}
