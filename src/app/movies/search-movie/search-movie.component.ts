import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../api-module/service/movie.service';
import { Movie } from '../../api-module/model/movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  name: string;
  movies: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.name = '';
  }

  private searchMovies() {
    this.movieService
      .getMoviesByName(this.name)
      .subscribe(movies => this.movies);
  }

  onSubmit() {
    this.searchMovies();
  }
}
