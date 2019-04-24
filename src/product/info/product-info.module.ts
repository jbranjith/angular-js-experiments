import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductInfoComponent } from './product-info.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [ProductInfoComponent],
  bootstrap: [ProductInfoComponent],
})
export class ProductInfoModule { }
