import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import {Order, OrderProduct, OrderService, ProductsWithQTE} from "../../../services/orders/order.service";
import {Product, ProductService} from "../../../services/products/product.service";
import {Choice} from "./choice";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ThankYouPopupComponent} from "../../misc/thank-you-popup/thank-you-popup.component";
import set = Reflect.set;


@Component({
  selector: 'app-landingpage1',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './landingpage1.component.html',
  styleUrls: ['./landingpage1.component.scss'],
  providers: [ConfirmationService,MessageService,DialogService]
})

export class Landingpage1Component implements OnInit {

  phoneNumber: string[] = [
    "",""
  ]
  order:Order;
  orderResp:Order;
  products:ProductsWithQTE[];
  OrdertoSub:OrderProduct[]=[];
  product:Product;
  showloader=false
  Qte:number;
  btnstatus:boolean = false;
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
              private productService:ProductService,
              private confirmationService: ConfirmationService,
              private messageService:MessageService,
              private dialogService: DialogService) { }

  ref: DynamicDialogRef;

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
    this.btnstatus = false;
    this.showloader = true
    console.log(this.order);
    if(this.Qte === 1) {
      this.order.total = 399
      this.order.total_to_pay = 399
    }
    else if (this.Qte === 2)
    {
      this.order.total = 649
      this.order.total_to_pay = 649

    }
    else {
      this.order.total = 800
      this.order.total_to_pay = 800
    }

    this.OrderService.AddOrder(this.order).subscribe(
      (response:Order) => {
        this.orderResp = response;
        setTimeout(()=> {

            this.orderPP = new OrderProduct(null,null,null,null);
            this.orderPP.order=this.orderResp;
            this.orderPP.product = this.product;
            this.orderPP.quantity = this.Qte;
            this.OrdertoSub.push(this.orderPP)


          this.OrderService.order(this.OrdertoSub).subscribe(
            data => {
              this.showloader = false
            this.ref = this.dialogService.open(ThankYouPopupComponent, {
               header: 'تم إكمال الطلب بنجاح',
               width: '80%',
             });
              this.btnstatus = true;
            }
    )
  })

  });

}
scrollToEnd(){
  document.getElementById('end').scrollIntoView();
}
}
