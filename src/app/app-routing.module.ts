import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {OrderComponent} from "./components/order/order.component";
import {ProductPageComponent} from "./components/product-page/product-page.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {AProposComponent} from "./components/apropos/apropos.component";
import {Landingpage1Component} from "./components/landingPages/landingpage1/landingpage1.component";
import {Landingpage2Component} from "./components/landingPages/landingpage2/landingpage2.component";
import {Landingpage3Component} from "./components/landingPages/landingpage3/landingpage3.component";


const routes: Routes = [
  { path: '',   redirectTo: '/landingPage1', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'orderPage', component: OrderComponent },
  { path: 'productDetails/:product', component: ProductPageComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'aPropos', component: AProposComponent },
  { path: 'landingPage1', component: Landingpage1Component },
  { path: 'landingPage2', component: Landingpage2Component },
  { path: 'landingPage3', component: Landingpage3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
