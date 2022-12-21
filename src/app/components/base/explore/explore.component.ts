import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  wishLists: any = []
  constructor(private wishListService: WishlistService ) { }

  ngOnInit(): void {
    this.getAllWishList()
  }

  getAllWishList():void{
    this.wishListService.getAllWishLists().subscribe(data => {
      this.wishLists = data
    })
  }

  goToWishList(userId:Number):void{
    this.wishListService.getWishList(userId).subscribe(data => {
      console.log(data)
    })
  }
}
