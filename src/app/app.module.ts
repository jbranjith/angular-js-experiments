import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GreetingComponent } from './greeting.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, GreetingComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})


export class AppModule { }
