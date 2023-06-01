import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPriceComponent } from "./components/product-price/product-price.component";

@NgModule({
  declarations: [
    ProductPriceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})

export class ProductsModule { }
