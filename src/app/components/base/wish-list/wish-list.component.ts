import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Product } from 'src/models/product.model';



@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  username: String
  userId: Number
  userLoggedId: Number
  products: any = []
  loading = false
  constructor(private productsService: ProductService,
    private wishListService: WishlistService,
    private userSerivce: UserService,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.username = this.aRoute.snapshot.paramMap.get("username")
  }

  ngOnInit(): void {
    this.getProducts()
    this.getLoggedUserId()
  }

  getLoggedUserId(){
    this.userLoggedId = 1
  }

  getProducts() {
    this.userSerivce.searchUserByUsername(this.username).subscribe(data => {
      this.userId = data['id']
      this.loading = true
      this.wishListService.getWishList(this.userId).subscribe(data => {
        this.loading = false
        this.products = data
      })
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
