import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable,pipe,throwError } from 'rxjs';
import { Plat } from '../models/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatServiceService {

  // Node/Express API
  REST_API: string = 'http://localhost:3000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Add
  addPlat(data: Plat): Observable<any> {
    let API_URL = `${this.REST_API}/add-plat`;
    return this.httpClient.post(API_URL, data);
  }

  // Get all objects
  getPlats() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single object
  getPlat(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/read-plat/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        })
      )
  }

  // Update
  updatePlat(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-plat/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
  }

  // Delete
  deletePlat(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-plat/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders})
  }
}
