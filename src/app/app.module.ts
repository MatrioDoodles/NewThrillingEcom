import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {APP_INITIALIZER, NgModule} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/misc/header/header.component';
import { FooterComponent } from './components/misc/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MatListModule } from "@angular/material/list";
import { MatBadgeModule } from "@angular/material/badge";
import { MatDialogModule } from '@angular/material/dialog';
import { OrderComponent } from './components/order/order.component';
import { MatRadioModule } from "@angular/material/radio";
import { AProposComponent } from './components/apropos/apropos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProductsComponent,
    CartComponent,
    ProductPageComponent,
    ContactUsComponent,
    OrderComponent,
    AProposComponent,
    CommentSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatGridListModule,
    MatTooltipModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    CommonModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatListModule,
    MatBadgeModule,
    MatDialogModule,
    MatRadioModule,
    FlexLayoutModule,
    CarouselModule,
    ButtonModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
