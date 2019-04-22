import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service'

@Component({
  selector: 'product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

}