import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Medicamento } from '../model/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

REST_API: string = 'https://doctor-api.azurewebsites.net/api';
// REST_API: string = 'https://doctors-api.azurewebsites.net/api';
// REST_API: string = 'https://localhost:7044/api';

httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
constructor(private httpClient: HttpClient) {}

Add(data: any): Observable<any> {
  
  let API_URL = `${this.REST_API}/Medicamentos`;
  return this.httpClient
    .post(API_URL, data)
    .pipe(catchError(this.handleError));
}

GetAll() {
  return this.httpClient.get(`${this.REST_API}/Medicamentos`);
}

Get(id: any): Observable<any> {
  
  let API_URL = `${this.REST_API}/Medicamentos/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
    map((res: any) => {
      return res || {};
    }),
    catchError(this.handleError)
  );
}

update(data: any): Observable<any> {
  let API_URL = `${this.REST_API}/Medicamentos/${data.id}`;
  return this.httpClient
    .put(API_URL, data, { headers: this.httpHeaders })
    .pipe(catchError(this.handleError));
}

delete(id: any): Observable<any> {
  
  let API_URL = `${this.REST_API}/Medicamentos/${id}`;
  return this.httpClient
    .delete(API_URL, { headers: this.httpHeaders })
    .pipe(catchError(this.handleError));
}

handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  } 
  return throwError(() => {
    errorMessage;
  });
}

}
