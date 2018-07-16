import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable()
export class MovieService {

  constructor(private _http: HttpClient) { }

  getMovie() {
      return this._http.get('/movies');
  }
  getMovieById(id: String) {
      return this._http.get(`/movies/${id}`);
  }

  updateMovie(id: String, movie: Movie) {
      console.log(movie);
      return this._http.put(`/movies/${id}`, movie);
  }

  deleteMovie(id: String) {
      return this._http.delete(`/movie/${id}`);
  }

  createMovie(movie: Movie) {
      return this._http.post('/movies', movie);
  }

}
