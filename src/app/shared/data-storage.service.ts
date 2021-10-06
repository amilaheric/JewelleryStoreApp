import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";

@Injectable({providedIn:'root'})



export class DataStorageService{
  constructor(private http:HttpClient,
              private productService:ProductService) {
  }

  storeProducts() {
    const products = this.productService.getProducts();
    return this.http.put('https://ng-pandora-default-rtdb.firebaseio.com/products.json', products).subscribe(
      response => {
        console.log(response);
      });


  } fetchProducts()
  {
    this.http.get<Product[]>('https://ng-pandora-default-rtdb.firebaseio.com/products.json').subscribe(products=>{
      this.productService.setProducts(products);
     //console.log(products);
    });
  }
}
