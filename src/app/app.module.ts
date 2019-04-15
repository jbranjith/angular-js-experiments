import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from '../binding-property/property-binding.component';
import {EventBindingComponent} from '../binding-event/event-binding.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PropertyBindingComponent, EventBindingComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
