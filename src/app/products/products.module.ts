import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPriceComponent } from "./components/product-price/product-price.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";

@NgModule({
  declarations: [
    ProductPriceComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})

export class ProductsModule { }
