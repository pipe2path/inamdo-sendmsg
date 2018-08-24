import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './user';
import { USERS } from './mock-users';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsersUrl = environment.apiUrl + '/users';
  //getUsersUrl = 'http://review.inamdo.com/api/users';

  getUsersMock(): Observable<User[]> {
    var users = of(USERS);
    return users;
  }

  getUsers(entityId: number) {
    var users = this.http.get(this.getUsersUrl);
    return users;
  }
}
