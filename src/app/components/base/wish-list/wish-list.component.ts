import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Product } from 'src/models/product.model';



@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(private productsService: ProductService,
    private wishListService: WishlistService,
    private toastr: ToastrService) { }
  products: any = []
  loading = false
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    // if userId is null, go to login
    // const userId = this.loginService.getTokenDecoded()
    const userId = 1
    this.loading = true
    this.wishListService.getWishList(userId).subscribe(data => {
      this.loading = false
      this.products = data
    })
  }

  removeProduct(id: Number): void {
    // if userId is null, go to login
    // const userId = this.loginService.getTokenDecoded()
    const userId = 1
    
    this.wishListService.removeProductFromWishlist(id, userId).subscribe({
      complete: () => {
        this.toastr.success('Has borrado este producto de tu lista')
        this.getProducts()
      },
      error: (e) => {
        this.toastr.error('Ha ocurrido error en el backend', 'Error 😨')
      }
    })
  }
}
