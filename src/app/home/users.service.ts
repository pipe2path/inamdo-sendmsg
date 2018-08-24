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

  getUsersUrl = environment.apiUrl + '/users/couponlist';
  //getUsersUrl = 'http://review.inamdo.com/api/users';

  getCouponListMock(): Observable<User[]> {
    var users = of(USERS);
    return users;
  }

  getCouponList(entityId: number) {
    var couponList = this.http.get(this.getUsersUrl);
    return couponList;
  }
}
