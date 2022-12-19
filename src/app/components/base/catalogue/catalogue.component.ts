import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Product } from 'src/models/product.model';
import { WishList } from 'src/models/wishlist.model';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  products: any = []
  wishList: any = []
  ids: any = []
  loading = false
  constructor(private productsService: ProductService,
              private wishListService: WishlistService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts():void{
    this.loading = true
    this.productsService.getProducts().subscribe(data => {
      this.products = data
      this.loading = false
    })
  }
  addToWishList(productId:Number):void{
    // if userId is null, go to login
    // const userId = this.loginService.getTokenDecoded()
    const userId = 1
    const wishList: WishList = {
      productId: productId,
      userId: userId
    }
    this.wishListService.addProduct(wishList).subscribe({
      complete: () => {
        this.toastr.success('Has agregado este producto en tu lista')
      },
      error: (e) => {
        if(e.status == 404){
          this.toastr.error('Ya tienes este producto en tu lista', 'Error')
        }else{
          this.toastr.error('Ha ocurrido error en el backend', 'Error 😨')
        }
        
      }
    })  
  }
}
