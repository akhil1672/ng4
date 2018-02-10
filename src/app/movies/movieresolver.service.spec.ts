import { TestBed, inject } from '@angular/core/testing';

import { MovieresolverService } from './movieresolver.service';
import { MovieService } from '../services/movie.service';
import { HttpClientModule } from '@angular/common/http';

describe('MovieresolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [MovieresolverService,MovieService]
    });
  });

  it('should be created', inject([MovieresolverService], (service: MovieresolverService) => {
    expect(service).toBeTruthy();
  }));
});
