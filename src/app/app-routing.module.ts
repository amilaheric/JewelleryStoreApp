import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart/cart.component";
import {ProductInfoComponent} from "./product-info/product-info.component";




const routes:Routes=[
  {path:'',component:ProductListComponent},
  {path:'checkout',component:CartComponent},
  {path:'products/:productId',component:ProductInfoComponent},
  {path:'search/:searchTerm', component:ProductListComponent},

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
