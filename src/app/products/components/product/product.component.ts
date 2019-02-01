import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../shared/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() add: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void { }

  public onClick(event: MouseEvent): void {
    event.preventDefault();
    this.add.emit(this.product);
  }
}
