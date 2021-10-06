import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
import {Product} from "../models/product.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {nameValidator} from "./name.validator";
import{NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public items:Product[]=[];
public checkoutForm:FormGroup;
  constructor(private serviceCart:CartService,
              private formBuilder:FormBuilder,
              private notificationService:NotificationsService) {
    this.items=this.serviceCart.getItems();
    this.checkoutForm=this.formBuilder.group({
      name:['',[Validators.required, nameValidator()]],
      address:['',[Validators.required, Validators.pattern('[0-9]+[a-z]+')]],
      email:['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

public get name(){
    return this.checkoutForm.get('name');
}

  public get address(){
    return this.checkoutForm.get('address');
  }
  public get email(){
    return this.checkoutForm.get('email');
  }
public submitForm(data){
    console.log(data);
    if(!this.checkoutForm.valid){
      window.alert('Not valid!');
      return;
    }///poslati serverskoj app

 this.items= this.serviceCart.celarCart();
    this.checkoutForm.reset();
}
  onSuccess(message){
    this.notificationService.success('Succsess',message, {
      position:['bottom', 'right'],
      timeout:2000,
      animate:'fade',
      showProgressBar:true

    });
  }





}
