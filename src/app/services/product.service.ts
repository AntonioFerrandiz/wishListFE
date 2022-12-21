import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from 'src/models/product.model';

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
  addProducts(product: Product){
    return this.http.post(this.myAppUrl + this.myApiUrl, product)
  }
  searchProduct(id:Number){
    return this.http.get(this.myAppUrl + this.myApiUrl + '?id=' + id)
  }
  fetchProducts(id:Number){
    return this.http.get('https://fakestoreapi.com/products/' + id)
  }
  setLocalStorage(data:any):void{
    localStorage.setItem('product', data)
  }
}
