import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: string = "Welcome to Products App";

  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  onSelect(product: Product): void {
    //console.log('selected prod: ' + product.id)
    this.selectedProduct = product;
  }
}