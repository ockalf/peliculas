import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PageIndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
