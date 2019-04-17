import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';
import { PRODUCTS } from './product.constants';

@Injectable({ providedIn: 'root' })
export class ProductService {

  getAllProducts(): Product[] {
    return PRODUCTS;
  }

  getProductById(id: number): Product {
    return PRODUCTS.find(product => product.id === id);
  }
}