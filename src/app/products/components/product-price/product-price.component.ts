import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'products-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})

export class ProductPriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0
  public interval$?: Subscription

  constructor() {
    console.log('------------------------------------------------------------------')
    console.log('------ constructor was trigger from product price component ------')
    console.log('------------------------------------------------------------------')
  }

  ngOnInit(): void {
    console.log('--------------------------------------------------------------------')
    console.log('-- ngOnInit was trigger from product price component ---------------')
    console.log('--------------------------------------------------------------------')
    this.interval$ = interval(1000).subscribe(value => console.log(value))
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('---------------------------------------------------------------------')
    console.log('-- ngOnChanges was trigger from product price component -------------')
    console.log('---------------------------------------------------------------------')
    console.log({changes})
  }

  ngOnDestroy(): void {
    console.log('---------------------------------------------------------------------')
    console.log('-- ngOnDestroy was trigger from product price component -------------')
    console.log('---------------------------------------------------------------------')

    this.interval$?.unsubscribe()
  }

}
