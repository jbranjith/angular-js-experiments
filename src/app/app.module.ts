import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from '../data-binding/property-binding.component';
import { GreetingComponent } from '../greeting/greeting.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PropertyBindingComponent, GreetingComponent],  
  bootstrap: [AppComponent],
})
export class AppModule { }
