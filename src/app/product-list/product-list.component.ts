import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
import{ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public products:Product[]=[];
  constructor(private productService:ProductService,
              private route:ActivatedRoute) {
    this.products=productService.getProducts();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
    if(params.searchTerm)
      this.products=this.productService.getProducts().filter(product=>
      product.name.toLowerCase().includes(params.searchTerm.toLowerCase()))
    else
      this.products=this.productService.getProducts();
  })
  }
//deleteProduct(id)
//{
  //let index=this.products.findIndex(e=>e.productId===id);
//if(index!==-1){
 // this.products.splice(index,1);
//}
 // console.log(id);
//}
}
