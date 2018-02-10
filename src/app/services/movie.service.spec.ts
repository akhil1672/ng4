import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { Movie } from '../common/models/movies';

describe('MovieService', () => {
  let service:MovieService;
  let mockHttp:HttpTestingController;
  let movies:Movie[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [MovieService]
    });

    service=TestBed.get(MovieService);
    mockHttp=TestBed.get(HttpTestingController);
  });

  afterEach(()=>{
    mockHttp.verify();
  })

  movies=[
    {name:"HElloe",year:34,rating:3},
    { name: "HElloe", year: 34, rating: 3}
  ]
  
  it('should retreive all movies',()=>{
    service.getMovies().subscribe((res)=>{
      expect(res.length).toBe(2);
      expect(res).toEqual(movies);
    })

    const req=mockHttp.expectOne('http://localhost:3000/api/movies');

    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toBe("json");

    req.flush(movies);


  })
  let movie:Movie={name:"donkeys",year:23,rating:34};
  it('should add a movie',()=>{
    service.addMovie(movie).subscribe((res)=>{
      expect(res.name).toEqual('donkeys');
      expect(res.rating).toEqual(34);
      expect(res).toEqual(movie);
    })
    const postreq=mockHttp.expectOne('http://localhost:3000/api/movies');
    expect(postreq.request.method).toBe('POST');
    postreq.flush(movie);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  let moviename="donkeys";
  it('should delete a movie',()=>{
    service.deleteMovie(moviename).subscribe((res)=>{
      console.log(res);
      expect(res).toBeTruthy();
    })
    const deletereq = mockHttp.expectOne('http://localhost:3000/api/movies/'+moviename);
    expect(deletereq.request.method).toBe("DELETE");
    deletereq.flush(moviename);
  })

  let movienam = "donkeys";
  it('should update a movie', () => {
    service.updateMovie(movienam,movie).subscribe((res) => {
      console.log(res);
      expect(res).toBeTruthy();
    })
    const updatereq = mockHttp.expectOne('http://localhost:3000/api/movies/' + movienam);
    expect(updatereq.request.method).toBe("PUT");
    updatereq.flush(movienam);
  })

  let movieName = "Hulk 2";
  xit('should get a movie donkeys', () => {
    service.getMovie(movieName).subscribe((res) => {
      console.log(res);
      expect(res.name).toEqual("donkeys");
      expect(res.rating).toEqual(34);
    })
    const getreq = mockHttp.expectOne('http://localhost:3000/api/movies/' + movieName);
    expect(getreq.request.method).toBe("GET");
    getreq.flush(movieName);
  })
});
