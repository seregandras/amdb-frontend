import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { User } from '../model/user';

@Injectable()
export class UserService {
  apiUrl = SERVER_API_URL;

  constructor(private httpClient: HttpClient) {}

  /* GET */
  public getUsers(): Observable<User[]> {
    const url = this.apiUrl + '/user';
    const params = new HttpParams();

    return this.httpClient.get<User[]>(url, { params: params });
  }

  /* POST */
  public createUser(user: User): Observable<User> {
    const url = this.apiUrl + '/user';
    const params = new HttpParams();

    return this.httpClient.post<User>(url, user, { params: params });
  }

  /* PUT */
  public updateUser(user: User): Observable<User> {
    const url = this.apiUrl + '/user';
    const params = new HttpParams();

    return this.httpClient.put<User>(url, user, { params: params });
  }
}
