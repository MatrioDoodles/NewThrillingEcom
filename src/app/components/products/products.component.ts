import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../../services/products/product.service";
import {Router} from "@angular/router";
import {API_URL} from "../../app.const";
import {CartService} from "../../services/misc/cart.service";
import {ProductsWithQTE} from "../../services/orders/order.service";
import {Category, CategoryService} from "../../services/categories/category.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Products:Product[];
  categories:Category[];
  timeout: any = null;


  constructor(private ProductService:ProductService,
              private route:Router,
              private _cartService:CartService,
              private CategoriesService:CategoryService) {
  }

  ngOnInit(): void {

    this.RetrieveAllProducts();
  }

  RetrieveAllCategories()
  {
    this.CategoriesService.getAllCategories().subscribe(
      (response:Category[]) =>
      {
        setTimeout(()=>{
          this.categories = response;
        })
      }
    )
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

    search(event: any){
      clearTimeout(this.timeout);
      var $this = this;
      this.timeout = setTimeout(function () {
        if (event.keyCode != 13) {
          console.log(event.target.value)
          if(event.target.value != null && event.target.value != undefined && event.target.value.length >0) {
         $this.searchQuery(event.target.value)
          }else {
            $this.RetrieveAllProducts();
          }
        }
      }, 10);

    }

    searchQuery(searchvar)
    {
      this.ProductService.getAllProductsByLabel(searchvar).subscribe(
        (data: any) => {
          setTimeout(() => {
            this.Products = data
            for (let i = 0; i < this.Products.length; i++) {
              this.Products[i].picture = `${API_URL}/products/img/${this.Products[i].id}`;
            }
          });
        }
      )
    }
    addToCart(prod:Product,qte)
    {
        this._cartService.getselectedproducts(new ProductsWithQTE(qte,prod));
    }
}
