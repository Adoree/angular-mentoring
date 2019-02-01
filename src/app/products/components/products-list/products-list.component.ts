import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../shared/product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public products: Product[];
  public error: any;

  constructor(
    private productsService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this.productsService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        this.error = error;
      }
    );
  }

  public addToCart(product: Product): void {
    this.productsService.addToCart(product);
  }

}
