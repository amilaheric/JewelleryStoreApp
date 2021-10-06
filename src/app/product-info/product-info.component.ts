import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CartService} from "../services/cart.service";
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnDestroy {

  private pramMapSub:Subscription=null;
  public product:Product;
  constructor(private productService:ProductService,
              private route:ActivatedRoute,
              private  cartService:CartService,
              private notificationService:NotificationsService)
  {
   this.pramMapSub= this.route.paramMap.subscribe(params=>{
      const pId:number=Number(params.get('productId'));
     this.product=  this.productService.getProducts().filter(p=>p.productId===pId)[0];
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    if(this.pramMapSub!=null){
      this.pramMapSub.unsubscribe();
      this.pramMapSub=null;
    }
  }
  public addToCart(){
    this.cartService.addToCart(this.product);

  }

}
