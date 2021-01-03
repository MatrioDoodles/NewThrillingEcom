import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {OrderComponent} from "./components/order/order.component";


const routes: Routes = [
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'orderPage', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
