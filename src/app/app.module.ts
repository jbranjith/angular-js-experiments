import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from '../data-binding/property-binding.component';
import {EventBindingComponent} from '../data-binding/event-binding.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PropertyBindingComponent, EventBindingComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
