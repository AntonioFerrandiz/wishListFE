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
    this.myAppUrl = environment.endpointBackend;
    this.myApiUrl = "product";
  }

  getProducts(){
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }

  searchProduct(id:Number){
    return this.http.get(this.myAppUrl + this.myApiUrl + '?id=' + id)
  }

  setLocalStorage(data:any):void{
    localStorage.setItem('product', data)
  }
}
