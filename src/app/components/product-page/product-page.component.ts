import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../../services/products/product.service";
import {ActivatedRoute} from "@angular/router";
import {API_URL} from "../../app.const";
import {CartService} from "../../services/misc/cart.service";
import {ProductsWithQTE} from "../../services/orders/order.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
product:Product;
productId: any;
  constructor(private productService:ProductService,
              private router:ActivatedRoute,
              private _cartService:CartService,) { }

  ngOnInit(): void {
    this.productId = this.router.snapshot.params['product'];
    this.productService.getProductById(this.productId).subscribe(
      (response:Product)=>{
        setTimeout(()=>{
          this.product=response;
          this.product.picture = `${API_URL}/products/img/${ this.product.id}`;
        })
      }
    )
  }
  addToCart(prod:Product,qte)
  {
    this._cartService.getselectedproducts(new ProductsWithQTE(qte,prod));
  }

}
