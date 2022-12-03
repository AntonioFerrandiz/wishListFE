import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/models/product.model';



@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(private productsService: ProductService) { }
  products: any = []
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.products = localStorage.getItem("products");
    if (this.products == null) {
      this.products = []
    } else {
      this.products = JSON.parse(this.products)
      console.log(this.products);  
    }
  }
}
