import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
import { ProductSortService, ProductSearchCriteria } from './product-sort.service'

@Component({
  selector: 'product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent implements OnInit {
  products: Product[];

  constructor(
    private productSortService: ProductSortService
  ) { }

  ngOnInit() {
    this.getProducts({ sortColumn: 'id', sortDirection: 'asc' });
  }

  getProducts(criteria: ProductSearchCriteria) {
    this.products = this.productSortService.getProducts(criteria);
  }
}