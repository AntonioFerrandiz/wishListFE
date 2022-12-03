import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  myAppUrl: string
  myApiUrl: string

  constructor(private http: HttpClient) { 
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiUrl = "products/";
  }

  getProducts(){
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
}
