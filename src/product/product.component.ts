import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './product.constants';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: string = "Welcome to Products App"

  products: Product[] = PRODUCTS;

  ngOnInit() { }
}