import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { SearchPipe } from '../common/pipes/search.pipe';
import { RouterModule } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,RouterModule,HttpClientModule,RouterTestingModule],
      declarations: [ MoviesComponent,SearchPipe],
      providers:[MovieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
