import { TestBed, inject } from '@angular/core/testing';

import { MovieactivatorService } from './movieactivator.service';
import { MovieService } from '../../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieactivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule],
      providers: [MovieactivatorService, MovieService]
    });
  });

  it('should be created', inject([MovieactivatorService], (service: MovieactivatorService) => {
    expect(service).toBeTruthy();
  }));
  
});
