import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/models/product.model';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  products: any = []
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts():void{
    this.productsService.getProducts().subscribe(data => {
      this.products = data
    })
  }
  addToWishList():void{
    console.log("Se agregó un nuevo item a la wish list")
  }
}
