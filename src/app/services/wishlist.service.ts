import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WishList } from 'src/models/wishlist.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  myAppUrl: string
  myApiUrl: string

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpointBackend;
    this.myApiUrl = "wishList/";
  }

  addProduct(wishList: WishList){
    return this.http.post(this.myAppUrl + this.myApiUrl, wishList)
  }

  getWishList(userId: Number){
    return this.http.get(this.myAppUrl + this.myApiUrl + `byUser/${userId}`)
  }

  getAllWishLists(){
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
  removeProductFromWishlist(wishListId: Number, userId:Number){
    return this.http.delete(this.myAppUrl + this.myApiUrl + `delete/${wishListId}/${userId}`)
  }
}
