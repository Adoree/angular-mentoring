import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../products/shared/product.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
