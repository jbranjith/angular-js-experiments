import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TwoWayBindingComponent } from './two-way.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [TwoWayBindingComponent],
  bootstrap: [TwoWayBindingComponent],
})
export class TwoWayBindingModule { }
