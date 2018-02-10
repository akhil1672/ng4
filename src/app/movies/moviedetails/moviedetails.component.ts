import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Movie } from '../../common/models/movies';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  
  movie:any;
  constructor(private moviesservice:MovieService,private aroute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.moviesservice.getMovie(this.aroute.snapshot.params['name']).subscribe((movie)=>{
      this.movie=movie;
    })
  }

}
