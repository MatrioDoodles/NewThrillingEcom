import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {OrderComponent} from "./components/order/order.component";
import {ProductPageComponent} from "./components/product-page/product-page.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {AProposComponent} from "./components/apropos/apropos.component";


const routes: Routes = [
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'orderPage', component: OrderComponent },
  { path: 'productDetails/:product', component: ProductPageComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'aPropos', component: AProposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
