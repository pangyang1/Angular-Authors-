import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
    movie: Movie;
    newMovie: Movie = new Movie();

  constructor(
      private _movieService: MovieService,
      private _router: Router,
      private _aRouter: ActivatedRoute
  ) { }

  ngOnInit() {
      this._aRouter.params.subscribe((params: Params) => {
        this._authorService.getAuthorById(params['id']).subscribe(movie => this.movie = movie as Movie);
      });
    }

    goHome() {
        this._router.navigate(['Movies']);
    }

    updateAuthor(id: String): void {
        console.log(this.author);
        this._movieService.updateMovie(id, this.movie).subscribe(response => this.goHome());
    }
}
