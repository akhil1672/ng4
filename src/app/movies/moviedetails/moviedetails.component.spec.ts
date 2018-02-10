import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailsComponent } from './moviedetails.component';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviedetailsComponent', () => {
  let component: MoviedetailsComponent;
  let fixture: ComponentFixture<MoviedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterModule,HttpClientModule,RouterTestingModule],
      declarations: [ MoviedetailsComponent ],
      providers:[MovieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
