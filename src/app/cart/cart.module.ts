import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartService } from './shared/cart.service';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    CartService,
  ],
  exports: [
    CartComponent,
  ],
})
export class CartModule { }
