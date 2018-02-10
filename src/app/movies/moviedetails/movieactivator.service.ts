import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { Movie } from '../../common/models/movies';

@Injectable()
export class MovieactivatorService implements CanActivate{

  canActivate(aroute:ActivatedRouteSnapshot){
    let movieexists=!!this.moviesService.getMovie(aroute.params['name']);
    if(!movieexists)
      return this.router.navigate(['/movies']);
    return movieexists;
  }
  constructor(private moviesService:MovieService,private router:Router) { }

}
