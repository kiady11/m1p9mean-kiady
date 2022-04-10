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

  food = [
    {
      id:1,
      nom:"Paneer Grilled Sandwich",
      ingredients:"Pan-fried masala paneer.",
      prix:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      nom:"Veggie Supreme",
      ingredients:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      prix:369,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      nom:"Paneer Burger",
      ingredients:"panner",
      prix:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      nom:"Veg Masala Roll In Naan",
      ingredients:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      prix:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      nom:"Indulgence Brownie",
      ingredients:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      prix:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      nom:"Oreo Cheesecake Ice Cream",
      ingredients:"Oreo ice cream",
      prix:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ];

  // Add
  addPlat(data: Plat): Observable<any> {
    let API_URL = `${this.REST_API}/add-plat`;
    return this.httpClient.post(API_URL, data);
  }

  // Get all objects
  getPlats() {
    // return this.httpClient.get(`${this.REST_API}`);
    return this.food;
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
