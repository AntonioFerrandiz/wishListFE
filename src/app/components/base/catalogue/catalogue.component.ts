import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
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
    private router: Router,
    private loginService: LoginService,
    
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.loading = true
    this.productsService.getProducts().subscribe(data => {
      this.products = data
      this.loading = false
    })
  }
  addToWishList(productId: Number): void {
    if (this.loginService.getToken() == null) {
      this.toastr.warning('Inicia sesión para guardar productos en tu lista de deseos', '')
      this.router.navigate(['/login'])
    } else {
      const userId = this.loginService.getTokenDecoded()
      const wishList: WishList = {
        productId: productId,
        userId: userId
      }
      this.wishListService.addProduct(wishList).subscribe({
        complete: () => {
          this.toastr.success('Has agregado este producto en tu lista')
        },
        error: (e) => {
          if (e.status == 404) {
            this.toastr.error('Ya tienes este producto en tu lista', 'Error')
          } else {
            this.toastr.error('Ha ocurrido error en el backend', 'Error 😨')
          }

        }
      })
    }

  }
}
