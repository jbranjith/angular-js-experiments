import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  
  constructor(private productService: ProductService) { }
  
  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }


  /*selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }*/
}