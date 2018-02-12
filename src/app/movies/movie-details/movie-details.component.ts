import { Component, Input } from '@angular/core';

import { MovieService } from '../../api-module/service/movie.service';
import { Movie } from '../../api-module/model/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService]
})
export class MovieDetailsComponent {
  @Input() movie: Movie;

  constructor(private movieService: MovieService) {}

  delete(): void {
    // this.movieService.deleteMovie(this.movie['id']).subscribe(() => this.goBack());
  }

  goBack(): void {
    window.location.replace('');
  }
}
