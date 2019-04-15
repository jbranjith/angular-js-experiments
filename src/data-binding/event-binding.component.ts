import { Component, OnInit } from '@angular/core';

import {PropertyBindingData} from './property-binding-data';

@Component({
  selector: "event-binding",
  templateUrl: "./event-binding.component.html",
  providers:[PropertyBindingData]
})
export class EventBindingComponent implements OnInit {

constructor(private propertyBindingData: PropertyBindingData){}

  morning(event) {
    alert("Good Morning!!!");
  }

  evening(event) {
    alert("Good Evening!!");
  }

  ngOnInit() {

  }
}