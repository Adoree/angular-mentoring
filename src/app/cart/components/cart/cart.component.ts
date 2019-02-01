import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { Product } from '../../../products/shared/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cart: Product[];

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => this.cart = data);
  }

}
