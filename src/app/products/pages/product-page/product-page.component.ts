import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false
  public currentPrice : number = 10

  constructor() {
    console.log('------------------------------------------------------------------')
    console.log('------------------- constructor was trigger ----------------------')
    console.log('------------------------------------------------------------------')
  }

  ngOnInit(): void {
    console.log('--------------------------------------------------------------------')
    console.log('-- ngOnInit was trigger: -------------------------------------------')
    console.log('-- You can use it to: ----------------------------------------------')
    console.log('-- * Perform complex initializations outside of the constructor ----')
    console.log('------ - Like fetch initial data. ----------------------------------')
    console.log('-- * Set up the component after Angular sets the input properties --')
    console.log('--------------------------------------------------------------------')
  }

  ngDoCheck(): void {
    console.log('---------------------------------------------------------------------')
    console.log('-- ngDoCheck was trigger: -------------------------------------------')
    console.log('---------------------------------------------------------------------')
  }

  ngAfterContentInit(): void {
    console.log('---------------------------------------------------------------------')
    console.log('-- ngAfterContentInit was trigger: ----------------------------------')
    console.log('---------------------------------------------------------------------')
  }

  ngAfterContentChecked(): void {
    console.log('---------------------------------------------------------------------')
    console.log('-- ngAfterContentChecked was trigger: -------------------------------')
    console.log('---------------------------------------------------------------------')
  }

  ngAfterViewInit(): void {
    console.log('---------------------------------------------------------------------')
    console.log('-- ngAfterViewInit was trigger: -------------------------------------')
    console.log('---------------------------------------------------------------------')
  }

  ngAfterViewChecked(): void {
    console.log('---------------------------------------------------------------------')
    console.log('-- ngAfterViewChecked was trigger: ----------------------------------')
    console.log('---------------------------------------------------------------------')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('---------------------------------------------------------------------')
    console.log('-- ngOnChanges was trigger: -----------------------------------------')
    console.log('---------------------------------------------------------------------')
  }

  ngOnDestroy(): void {
    console.log('---------------------------------------------------------------------')
    console.log('-- ngOnDestroy was trigger: -----------------------------------------')
    console.log('---------------------------------------------------------------------')
  }

  increasePrice() {
    this.currentPrice ++
  }

}
