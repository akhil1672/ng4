import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Movie } from '../common/models/movies';
import { MovieService } from '../services/movie.service';

@Injectable()
export class MovieresolverService implements Resolve<any>{
  movies:Movie[];
  resolve(){
    this.moviesService.getMovies().subscribe((movies:Movie[])=>{
      this.movies=movies;
    })
  }

  constructor(private moviesService:MovieService) { }

}
