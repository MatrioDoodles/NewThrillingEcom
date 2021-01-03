import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/misc/cart.service";
import {Order, OrderProduct, OrderService, ProductsWithQTE} from "../../services/orders/order.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HeaderComponent} from "../misc/header/header.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order:Order;
  orderResp:Order;
  products:ProductsWithQTE[];
  OrdertoSub:OrderProduct[]=[];
  orderPP:OrderProduct;
  total=0;
  step1=false;
  step2=false;
  step3=false;
  hidden=true

  constructor(private _cartService:CartService,
              private OrderService:OrderService,) {

  }

  ngOnInit(): void {

    var today = new Date();
    this.orderPP = new OrderProduct(null,null,null,null);
    this.order = new Order(null,'',null,'À confirmer','','','','','','Pas encore payé',null,null,
      null,'',false,false,today,null);
    this._cartService.products$.subscribe(
      (response:ProductsWithQTE[]) =>
      { this.products = response;
        for(let i=0;i<response.length;i++) {
          this.total = this.total + Number(this.products[i].product.selling_price_HT) * Number(this.products[i].quantity)
        }
      }
    )
  }
  step1Completed(){
    this.step1=true;
  }
  step2Completed(){
    this.step2=true;
  }
  Order()
  {

    this.order.total = this.total;
    this.order.total_to_pay = this.total;
   this.OrderService.AddOrder(this.order).subscribe(
     (response:Order) => {
       this.orderResp = response;
       setTimeout(()=> {
         for(let i=0 ;i<this.products.length ;i++)
         {
           this.orderPP = new OrderProduct(null,null,null,null);
           this.orderPP.order=this.orderResp;
           console.log(this.products[i])
           this.orderPP.product = this.products[i].product;
           this.orderPP.quantity = this.products[i].quantity;
           this.OrdertoSub.push(this.orderPP)
         }
         console.log(this.OrdertoSub)
         this.OrderService.order(this.OrdertoSub).subscribe(
           response => {
             setTimeout(()=> {this.step3 = true;
               this.hidden=false})}
         )

       })
     }
   )
  }
}
