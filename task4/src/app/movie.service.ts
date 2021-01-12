import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  APIURL = 'http://localhost:3000/'

  constructor( private http:HttpClient ) { }

  getMovieList()
  {
    console.log('here')
    return this.http.get(this.APIURL+'movies') 
  }
}
