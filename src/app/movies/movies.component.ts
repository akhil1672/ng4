import { Component, OnInit } from '@angular/core';
import { Movie } from '../common/models/movies';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movie[];
  constructor(private moviesService:MovieService,private router:Router) { }

  deleteMovie(moviename){
    this.moviesService.deleteMovie(moviename).subscribe(()=>{ 
      console.log("Deleted movie");
      //this.ts.warning("Deleted "+moviename);
      window.location.reload();
    })
  }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(res=>{
      this.movies=res;
      console.log(res);
    })
  }

}
