import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ProductService,
  ],
  exports: [
    ProductsListComponent,
  ],
})
export class ProductsModule { }
