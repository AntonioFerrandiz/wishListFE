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
  wishList: any = []
  ids: any = []
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts():void{
    this.productsService.getProducts().subscribe(data => {
      this.products = data
    })
  }
  addToWishList(id:Number):void{
    const result = this.ids.includes(id)    
    this.ids.push(id)
    if(!result){
      this.productsService.searchProduct(id).subscribe(data => {
        this.wishList.push(data)
        
        localStorage.setItem("products", JSON.stringify(this.wishList))

      })
    }
    
  }
}
