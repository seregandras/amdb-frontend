import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MovieService } from '../../api-module/service/movie.service';
import { Movie } from '../../api-module/model/movie';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [MovieService]
})
export class CreateMovieComponent implements OnInit {
  movie = new Movie();
  submitted = false;

  constructor(private movieService: MovieService, private location: Location) {}

  ngOnInit() {}

  newMovie(): void {
    this.submitted = false;
    this.movie = new Movie();
  }

  private save(): void {
    this.movieService.createMovie(this.movie).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }
}
