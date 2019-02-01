import { Categories } from '../constants/categories';

export interface Product {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Categories;
}
