import { Component } from '@angular/core';


@Component({
  selector: "event-binding"
})
export class EventBindingComponent {
  morning(event) {
    alert("Good Morning!!!");
  }

  evening(event) {
    alert("Good Evening!!");
  }
}