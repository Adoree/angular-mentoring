import { Injectable } from '@angular/core';
import { Product } from '../../products/shared/product.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  public addToCart(product: Product): void {
    this.cart.next([...this.cart.getValue(), product]);
  }

  public getCart(): Observable<Product[]> {
    return this.cart;
  }
}
