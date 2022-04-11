import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable,pipe,throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

    // Node/Express API
    REST_API: string = 'http://localhost:3000/api';

    // Http Header
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  inscription(data: User): Observable<any> {
    console.log("xxx",data);
    let API_URL = `${this.REST_API}/inscription`;
    console.log(API_URL);

    return this.httpClient.post(API_URL, data);
  }
}
