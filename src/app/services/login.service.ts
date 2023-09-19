import { Login } from 'src/app/model/login';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // endpoint: string = 'https://doctor-api.azurewebsites.net/api';
  // endpoint: string = 'https://doctors-api.azurewebsites.net/api';
  endpoint: string = 'https://localhost:7044/api';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentLogin = {};
  constructor(private http: HttpClient, public router: Router,private route: ActivatedRoute,) {}
  // Sign-up
  signUp(login: Login): Observable<any> {
    let api = `${this.endpoint}/Login`;
    return this.http.post(api, login).pipe(catchError(this.handleError));
  }
  // Sign-in
  signIn(login: Login): Observable<any> {  
    return this.http
      .post<any>(`${this.endpoint}/Login`, login);
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/']);
    }
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
