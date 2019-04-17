import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';
import { PRODUCTS } from './product.constants';

@Injectable({ providedIn: 'root' })
export class ProductService {

  //constructor(private http: HttpClient) { }

  getAllProducts(): Product[] {
    return PRODUCTS;
  }
}