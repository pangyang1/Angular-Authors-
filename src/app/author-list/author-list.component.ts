import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: movie[];

  constructor(private _movieService: MovieService, private _router: Router) { }

  ngOnInit() {
     this.getMovie();
  }

  getMovie() {
      this._movieService.getMovies().subscribe(allMovies => this.movies = allMovies as Movie[]);
  }

  editMovie(id: String): void {
    this._router.navigate(['/edit', id]);
  }

  deleteMovie(id: String): void {
      this._movieService.movie(id).subscribe(response => this.getMovies());
  }

}
