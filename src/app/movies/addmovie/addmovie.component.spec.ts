import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmovieComponent } from './addmovie.component';
import { FormsModule, NgForm } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { NavigationError } from '@angular/router/src/events';

describe('AddmovieComponent', () => {
  let component: AddmovieComponent;
  let fixture: ComponentFixture<AddmovieComponent>;
  let movieservice:MovieService;
  // let debugElement:DebugElement;
  // let htmlElement:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmovieComponent ],
      imports:[FormsModule,HttpClientModule,RouterModule,RouterTestingModule],
      providers:[MovieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    movieservice=TestBed.get(MovieService);
    //debugElement=fixture.debugElement.query(('div'))

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isNotSAved should not be true when addMovie is called',()=>{
    let movie:NgForm;
    component.addMovie(movie);
    expect(component.isNotSaved).not.toBeTruthy();
  })

  it('should add movie when addMovie is called',()=>{
    let movie:NgForm;
    component.addMovie(movie);
    movieservice.getMovies().subscribe(res=>{
      expect(res).toBeTruthy();
    })
    expect(movieservice.getMovies()).toBeTruthy();
    
  })

  it('isNotSAved should be true when cancel is called',()=>{
    component.cancel();
    expect(component.isNotSaved).toBeTruthy();
  })
});
