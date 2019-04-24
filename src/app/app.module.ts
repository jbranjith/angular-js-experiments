import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from '../binding-property/property.component';
import { EventBindingComponent } from '../binding-event/event.component';
import { TwoWayBindingComponent } from '../binding-two-way/two-way.component';
import { RandomComponent } from '../providers/random.component';
import { GreetingComponent } from '../providedin/greeting.component';
import { CalcComponent } from '../providedin/calc.component';

import { ProductComponent } from '../product/product.component';
import { ProductInfoComponent } from '../product/info/product-info.component';
import { ProductDashboardComponent } from '../product/dashboard/product-dashboard.component';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, RandomComponent, GreetingComponent, CalcComponent, ProductComponent, ProductInfoComponent, ProductDashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
