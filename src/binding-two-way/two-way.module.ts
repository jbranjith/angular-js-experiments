import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TwoWayComponent } from './two-way.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [TwoWayComponent],
  bootstrap: [TwoWayComponent],
})
export class TwoWayBindingModule { }
