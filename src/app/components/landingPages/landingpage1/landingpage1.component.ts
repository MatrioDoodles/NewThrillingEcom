import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Order, OrderProduct, OrderService, ProductsWithQTE} from "../../../services/orders/order.service";
import {Product, ProductService} from "../../../services/products/product.service";
import {Choice} from "./choice";


@Component({
  selector: 'app-landingpage1',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './landingpage1.component.html',
  styleUrls: ['./landingpage1.component.scss']
})

export class Landingpage1Component implements OnInit {

  order:Order;
  orderResp:Order;
  products:ProductsWithQTE[];
  OrdertoSub:OrderProduct[]=[];
  product:Product;
  Qte:number;
  orderPP:OrderProduct;
  villes: string[] =  [
    'AGADIR', 'BENI MELLAL', 'BERKANE', 'CASABLANCA', 'ELJADIDA', 'FES', 'INEZGANE', 'KENITRA', 'KHEMISSET', 'KHENIFRA',
    'SETTAT', 'KHOURIBGA', 'LAAYOUNE', 'MARRAKECH', 'MEKNES', 'MOHAMMADIA', 'NADOR', 'OUJDA', 'RABAT', 'SAFI', 'SALE',
    'SIDI KACEM', 'TANGER', 'TAZA', 'TEMARA', 'TETOUAN', 'AL HOCEIMA', 'BERRECHID', 'ERRACHIDIA', 'ESSAOUIRA', 'OUARZAZATE',
    'OUEZZANE', 'SEFROU', 'TIFLET'
  ];
  choice: Choice[] = [
    {val:1,select:'أريد علبة واحدة (399 درهم)'},
    {val:2,select:'أريد علبتين (649 درهم)'},
    {val:3,select:'أريد ثلاثة علب (800 درهم)'}
  ];
  constructor(private OrderService:OrderService,
              private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProductById(3).subscribe(
      (data:Product) => {
        this.product = data;
      }
    )
    const today = new Date();
    this.orderPP = new OrderProduct(null,null,null,null);
    this.order = new Order(null,'',null,'À confirmer','','','','','','Pas encore payé',0,null,
      null,'',false,false,today,null);
  }

  command(){
    this.order.total = this.product.selling_price_HT * this.Qte;
    this.order.total_to_pay = this.product.selling_price_HT * this.Qte;
    this.OrderService.AddOrder(this.order).subscribe(
      (response:Order) => {
        this.orderResp = response;
        setTimeout(()=> {

            this.orderPP = new OrderProduct(null,null,null,null);
            this.orderPP.order=this.orderResp;
            this.orderPP.product = this.product;
            this.orderPP.quantity = this.Qte;
            this.OrdertoSub.push(this.orderPP)

          console.log(this.OrdertoSub)
          this.OrderService.order(this.OrdertoSub).subscribe(
            response => {
        })
      }
    )
  })
}
}
