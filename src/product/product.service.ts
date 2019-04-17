import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './product.constants';

@Injectable({ providedIn: 'root' })
export class ProductService {

  getAllProducts(): Product[] {
    return PRODUCTS;
  }
}