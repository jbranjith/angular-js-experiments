import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from '../property-binding/person.component';
import { GreetingComponent } from '../greeting/greeting.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PersonComponent, GreetingComponent],  
  bootstrap: [AppComponent],
})
export class AppModule { }
