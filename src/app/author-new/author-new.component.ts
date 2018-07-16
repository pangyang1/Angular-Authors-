import { MovieService } from './../movie.service';
import { Movie } from './../movie';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {
    movie: Movie = new Movie();
    errors = String;

  constructor(private _movieService: MovieService,
      private _router: Router) { }

  ngOnInit() {
  }

  createmovie() {
    this._movieService.createMovie(this.movie).subscribe((response) => {
      console.log(response);
      if (response['errors']) {
        this.errors = response['errors'].name.message;
        } else {
            this.movie = new Movie();
            this.goHome();
        }
        });
    }

    goHome() {
        this._router.navigate(['movies']);
    }
}
