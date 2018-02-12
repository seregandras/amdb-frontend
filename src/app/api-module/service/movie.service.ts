import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Movie } from '../model/movie';

@Injectable()
export class MovieService {
  apiUrl = SERVER_API_URL;

  constructor(private httpClient: HttpClient) {}

  /* GET */
  public getMovies(): Observable<Movie[]> {
    const url = this.apiUrl + '/movie';
    const params = new HttpParams();

    return this.httpClient.get<Movie[]>(url, { params: params });
  }

  /* POST */
  public createMovie(movie: Movie): Observable<Movie> {
    const url = this.apiUrl + '/movie';
    const params = new HttpParams();

    return this.httpClient.post<Movie>(url, movie, { params: params });
  }

  /* PUT */
  public updateMovie(movie: Movie): Observable<Movie> {
    const url = this.apiUrl + '/movie';
    const params = new HttpParams();

    return this.httpClient.put<Movie>(url, movie, { params: params });
  }

  /* SEARCH */
  public getMoviesByName(movie: Movie): Observable<Movie> {
    const url = `findbyname/${name}`;
    const params = new HttpParams();

    return this.httpClient.get(url);
  }
}
