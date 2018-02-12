import { Component, OnInit } from '@angular/core';
import { MovieService } from '../api-module/service/movie.service';
import { Movie } from '../api-module/model/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private movieService: MovieService) {}

  getMovies() {
    this.movieService.getMovies().subscribe(
      response => {
        this.movies = response;
        console.log(this.movies);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(cust: Movie): void {
    this.selectedMovie = cust;
  }
}
