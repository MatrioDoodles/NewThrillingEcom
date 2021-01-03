import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/misc/cart.service";
import {OrderProduct, ProductsWithQTE} from "../../../services/orders/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  products:ProductsWithQTE[]=[];
  hidden = false;
  occ=0;
  cart= false;


  constructor( private _cartService:CartService,
               private router:Router
              ) { }

  ngOnInit(): void {

    this._cartService.product$.subscribe(
      (response:ProductsWithQTE) =>
      {
        setTimeout(()=>
        {

          for(let i=0;i<this.products.length;i++)
        {
          if(this.products[i].product.id === response.product.id)
          {
            this.products[i].quantity = Number(this.products[i].quantity) + Number(response.quantity);
            this.occ = this.occ +1;
          }

        }

        if(this.occ === 0) {
          this.products.push(response);

        }
        else {this.occ = 0;}
          if(this.products.length>0) {
            this.cart = true;
          }

        })

      }

    )

  }
  ClearCart(){
 this.products= [];
 this.cart=false;
  }
  order(){
    this._cartService.order(this.products);
    this.router.navigate(['orderPage'])
  }
}
