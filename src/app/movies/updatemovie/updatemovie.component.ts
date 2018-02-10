import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Movie } from '../../common/models/movies';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {

  movie:Movie;

  updateMovie(updatemovie:NgForm){
    this.moviesservice.updateMovie(this.movie.name,updatemovie).subscribe(()=>{
      console.log("Updated "+this.movie.name+" movie to "+updatemovie.name);
    })
    this.router.navigate(['/movies']);
  }

  cancel(){
    this.router.navigate(['/movies']);
  }

  constructor(private moviesservice:MovieService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.moviesservice.getMovie(this.route.snapshot.params['name']).subscribe((movie)=>{
      this.movie=movie;
    });
  }

}
