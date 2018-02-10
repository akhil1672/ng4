import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movies';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  transform(movies:any, moviename:string): any {
    if(!moviename)
      return movies;
    
    return movies.filter(function(moviesfiltered){
      return moviesfiltered.name.toLowerCase().indexOf(moviename.toLowerCase())>-1;
    })
  }

}
