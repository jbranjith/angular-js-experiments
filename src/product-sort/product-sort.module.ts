import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProductSortComponent } from './product-sort.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ProductSortComponent],
  bootstrap: [ProductSortComponent],
})
export class ProductSortModule { }
