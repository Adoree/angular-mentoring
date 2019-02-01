import { Product } from './product.interface';
import { Categories } from '../constants/categories';

export class ProductEntity implements Product {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Categories;

  constructor(props: Product) {
    Object.assign(this, props);
  }
}
