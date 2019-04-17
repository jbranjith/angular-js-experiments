import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './product.constants';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: string = "Welcome to Products App";

  products: Product[] = PRODUCTS;
  selectedProduct: Product;

  ngOnInit() {

  }

  onSelect(product: Product): void {
    //console.log('selected prod: ' + product.id)
    this.selectedProduct = product;
  }
}