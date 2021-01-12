import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { Movie } from 'src/app/model/movie';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieArr : Movie[]=[]
  constructor(private services:MovieService) { }

  ngOnInit(): void {
    this.services.getMovieList().subscribe((movie:any)=>{
      this.movieArr = movie
    })
  }

}
