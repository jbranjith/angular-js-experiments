import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PropertyBindingComponent } from './property.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [PropertyBindingComponent],
  bootstrap: [PropertyBindingComponent],
})
export class PropertyBindingModule { }
