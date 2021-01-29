import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../../services/products/product.service";
import {API_URL} from "../../app.const";
import {ProductsWithQTE} from "../../services/orders/order.service";
import {CartService} from "../../services/misc/cart.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  products:Product[];
  pics:string[]=[];
  responsiveOptions;
  responsiveOptionsSecond;
  showCarousel=false;
  constructor(private productService:ProductService,
              private _cartService:CartService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {

    this.pics.push('../../../assets/imgs/carousel1.jpg');
    this.pics.push('../../../assets/imgs/carousel2.jpg');
    this.pics.push('../../../assets/imgs/carousel3.jpg');
    this.productService.GetRandomProducts().subscribe(
      (response:Product[]) => {
        setTimeout(()=> {
          this.products = response;
          for (let i = 0; i < this.products.length; i++) {
            this.products[i].picture = `${API_URL}/products/img/${this.products[i].id}`;
          }
          this.showCarousel = true;
        },5000)
      }
    )

  }
  ngAfterViewInit(): void{
    this.productService.GetRandomProducts().subscribe(
      (response:Product[]) => {
        setTimeout(()=> {
          this.products = response;
          for (let i = 0; i < this.products.length; i++) {
            this.products[i].picture = `${API_URL}/products/img/${this.products[i].id}`;
          }
          this.showCarousel = true;
        })
      }
    )
  }
  addToCart(prod:Product)
  {
    this._cartService.getselectedproducts(new ProductsWithQTE(1,prod));
  }
}
