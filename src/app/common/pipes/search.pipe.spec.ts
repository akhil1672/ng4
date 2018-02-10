import { SearchPipe } from './search.pipe';
import { Movie } from '../models/movies';
import { TestBed, async } from '@angular/core/testing';
import { MovieService } from '../../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchPipe', () => {

  let movies:Movie[];
  let service: MovieService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule, RouterTestingModule],
      providers: [MovieService]
    })
      .compileComponents();
  }));

  beforeEach(()=>{
    service = TestBed.get(MovieService);
  })

  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  fit('should search for movies with name Hulk',()=>{
    const pipe=new SearchPipe();
    movies=[{name:"Hulk 2",year:34,rating:34},{name:"Hulk",year:34,rating:46}];
    // service.getMovies().subscribe((res)=>{
    //   movies=res;
    // })
    expect(pipe.transform(movies,"Hulk 2")).toBe(movies[0]);
  });
});
