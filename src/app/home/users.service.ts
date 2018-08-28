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
  putCouponListUrl = environment.apiUrl + '/users/couponlist';
  //getUsersUrl = 'http://review.inamdo.com/api/users';

  getCouponListMock(): Observable<User[]> {
    var users = of(USERS);
    return users;
  }

  getCouponList(entityId: number) {
    var couponList = this.http.get(this.getUsersUrl);
    return couponList;
  }

  saveCouponList(couponData: User): Observable<any>{
    const body = JSON.stringify(couponData);
    return this.http.put(this.putCouponListUrl, body, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return 'Something bad happened; please try again later.';
  }


}
