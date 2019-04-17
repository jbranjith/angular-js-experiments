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
    this.productService.getAllProducts().subscribe(
      products => this.products = products.slice(1, 3)
    );
  }

  /*getProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products.slice(1, 3));
  }*/
}