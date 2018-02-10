import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../common/models/movies';
const url="http://localhost:3000/api/movies";
@Injectable()
export class MovieService {

  constructor(private httpclient:HttpClient) { }

  getMovies() {
    return this.httpclient.get<Movie[]>(url);
  }

  getMovie(moviename){
    return this.httpclient.get<Movie>(url+'/'+moviename);
  }

  addMovie(movie){
    return this.httpclient.post<Movie>(url,movie);
  }

  deleteMovie(moviename){
    return this.httpclient.delete(url+'/'+moviename);
  }

  updateMovie(oldmoviename,movie){
    return this.httpclient.put(url+'/'+oldmoviename,movie);
  }
}
