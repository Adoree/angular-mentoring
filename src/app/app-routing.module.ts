import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { CartComponent } from './cart/components/cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductsListComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
