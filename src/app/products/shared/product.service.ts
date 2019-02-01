import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Categories } from '../constants/categories';
import { ProductEntity } from './product.entity';
import { Product } from './product.interface';
import { CartService } from '../../cart/shared/cart.service';

const product1 = {
  name: 'Name1',
  description: 'description',
  price: 40,
  isAvailable: true,
  category: Categories.Food,
};

const product2 = {
  name: 'Name2',
  description: 'description',
  price: 50,
  isAvailable: true,
  category: Categories.Games,
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(
    private cartService: CartService,
  ) { }

  public getProducts(): Observable<Product[]> {
    return of([
      new ProductEntity(product1),
      new ProductEntity(product2),
    ]);
  }

  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

}
