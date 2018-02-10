import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemovieComponent } from './updatemovie.component';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieactivatorService } from '../moviedetails/movieactivator.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdatemovieComponent', () => {
  let component: UpdatemovieComponent;
  let fixture: ComponentFixture<UpdatemovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ UpdatemovieComponent ],
      providers:[MovieService,MovieactivatorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
