
import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service'

@Injectable({ providedIn: 'root' })
export class ProductSortService {

  constructor(
    private productService: ProductService
  ) { }

  getProducts(criteria: ProductSearchCriteria): Product[] {
    return this.productService.getAllProducts().sort((a, b) => {
      if (criteria.sortDirection === 'desc') {
        return a[criteria.sortColumn] < b[criteria.sortColumn];
      } else {
        return a[criteria.sortColumn] > b[criteria.sortColumn];
      }
    });
  }
}

export class ProductSearchCriteria {
  sortColumn: string;
  sortDirection: string;
}