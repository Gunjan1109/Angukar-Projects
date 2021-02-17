import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
 // providers : [{provide : CartService, useValue : {items : 'items'}}]
})
export class CartComponent implements OnInit {

  constructor(private cartService : CartService, private formBuilder : FormBuilder) {
    this.checkoutForm = formBuilder.group({
      name : ['',Validators.required],
      address : ['',Validators.required]
    })
   }
  
  items;
  checkoutForm

  ngOnInit() {
    this.items = this.cartService.getItems()

  }

  onSubmit(customerData){
    this.items = this.cartService.clearCart()
    this.checkoutForm.reset()

    console.warn("Your order has been submitted",customerData);
    
  }

}
