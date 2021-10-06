import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private products:Product[]=[];
  productsChanged= new Subject<Product[]>();
  constructor() {
    this.products=[
    new Product(101,'Ogrlica s pavé krugom i logotipom Pandora',310,'Odaberi profinjeni stil s ogrlicom uz vrat s logotipom Pandora i pavé krugom. Na ogrlici, ručno dovršenoj s 14k pozlatom, nalazi se otvoreni krug s prozirnim kubnim cirkonima postavljenim pavé tehnikom. Pavé je obrubljen nizom sićušnih kuglica, a bočne strane kruga krase izrezbarena srca.','https://www.pandorashop.ba/files/thumbs/files/images/slike_proizvoda/thumbs_351/397436CZ_1_351_350px.webp'),
new Product(102,'Privjesak za privjeske Pandora Moments u obliku srca',144,'Odaberi elegantnu asimetriju uz privjesak za privjeske Pandora Moments u obliku srca. Privjesak je ručno dovršen od jedinstvene mješavine srebra i bakra s 14k roza pozlatom, a krasi ga kruti obris srca od zmijskog veza koji se može otvoriti.','https://www.pandorashop.ba/files/thumbs/files/images/slike_proizvoda/thumbs_351/389384C00_1_351_350px.webp'),
  new Product(103,'Ogrlica uz vrat Ispupčeno zlatno srce',206,'Istakni se u mnoštvu s ogrlicom uz vrat Ispupčeno zlatno srce. Ovaj dizajn, ručno dovršen od nepatvorenog srebra, uključuje viseći privjesak u obliku srca sa središtem od 14k zlata s jednostavnim ispoliranim izgledom koji ostavlja diskretan dojam.','https://static.pandora.net/consumer/jewellery/09/400x400/398425C01-45.jpg')
  ];

  }
  public getProducts():Product[]{
    return this.products;
  }
  setProducts(product:Product[]){
    this.products=product;
    this.productsChanged.next(this.products.slice());
  }
  //deleteProduct(index:number){
    //this.products.splice(index,1);
   // this.productsChanged.next(this.products.slice());
 // }
}
