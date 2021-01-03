import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Product} from "../products/product.service";
import {Order, ProductsWithQTE} from "../orders/order.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
private _product = new Subject<ProductsWithQTE>();
private _products = new BehaviorSubject<ProductsWithQTE[]>(null);
product$= this._product.asObservable();
products$= this._products.asObservable();

  constructor() { }

  getselectedproducts(prod:ProductsWithQTE)
  {
  this._product.next(prod);
  }
  /*clearCart()
  {
    this._products.next();
  }*/

  order(prods:ProductsWithQTE[])
  {
    this._products.next(prods);
  }
}
