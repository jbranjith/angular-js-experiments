import { Component, OnInit, Input } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service'

@Component({
  selector: 'product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts().slice(1, 5);
  }
}