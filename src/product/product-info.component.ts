import { Component, OnInit, Input } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  @Input() product: Product;

  ngOnInit() {

  }
}