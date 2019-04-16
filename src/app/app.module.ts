import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from '../binding-property/property.component';
import { EventBindingComponent } from '../binding-event/event.component';
import { TwoWayBindingComponent } from '../binding-two-way/two-way.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
