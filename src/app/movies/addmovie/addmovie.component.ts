import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  isNotSaved:boolean=true;

  addMovie(movie:NgForm){
    this.movieservice.addMovie(movie).subscribe(()=>{
      console.log("Added movie"+movie);
    })
    this.isNotSaved=false;
    this.router.navigate(['/movies']);
  }

  cancel(){
    this.isNotSaved=true;
    this.router.navigate(['/movies']);
  }

  constructor(private movieservice:MovieService,private router:Router) { }

  ngOnInit() {
  }

}
