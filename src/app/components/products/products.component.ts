import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../../services/products/product.service";
import {Router} from "@angular/router";
import {API_URL} from "../../app.const";
import {CartService} from "../../services/misc/cart.service";
import {ProductsWithQTE} from "../../services/orders/order.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Products:Product[];
  searchQuery:string;


  constructor(private ProductService:ProductService,
              private route:Router,
              private _cartService:CartService) {
  }

  ngOnInit(): void {

    this.RetrieveAllProducts();
  }


  RetrieveAllProducts(){
    this.ProductService.getAllProducts().
    subscribe(
      (data: any) => {

        //this.Products = new MatTableDataSource(data);
        setTimeout(() => {
          this.Products = data
          for(let i=0;i<this.Products.length;i++)
          {
            this.Products[i].picture = `${API_URL}/products/img/${ this.Products[i].id}`;
          } });
      }
    )}

    search(){

    }

    addToCart(prod:Product,qte)
    {
        this._cartService.getselectedproducts(new ProductsWithQTE(qte,prod));
    }
}
