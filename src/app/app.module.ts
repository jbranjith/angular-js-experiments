import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from '../binding-property/property.component';
import { EventBindingComponent } from '../binding-event/event.component';
import { TwoWayBindingComponent } from '../binding-two-way/two-way.component';
import { RandomComponent } from '../providers/random.component';
import { GreetingComponent } from '../providedin/greeting.component';
import { CalcComponent } from '../providedin/calc.component';
import { ProductComponent } from '../product/product.component';
import { ProductInfoComponent } from '../product-detail/product-info.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, RandomComponent, GreetingComponent, CalcComponent, ProductComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
