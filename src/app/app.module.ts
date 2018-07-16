import { MovieService } from './movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieNewComponent } from './movie-new/movie-new.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieNewComponent,
    MovieListComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
