import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title: String;
  @Input() year: Number;
  @Input() cover: String;
  @Input() imbdID: string;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  
  getStyle(){
    return this.cover != 'N/A'? this.sanitizer.bypassSecurityTrustStyle(`background-image: url(' ${this.cover}')`):null;
  }
  

}
