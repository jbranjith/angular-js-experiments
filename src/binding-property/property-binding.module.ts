import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PropertyBindingComponent } from './property-binding.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [PropertyBindingComponent],
  bootstrap: [PropertyBindingComponent],
})
export class EventBindingModule { }
