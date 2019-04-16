import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EventBindingComponent } from './event.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [EventBindingComponent],
  bootstrap: [EventBindingComponent],
})
export class EventBindingModule { }
