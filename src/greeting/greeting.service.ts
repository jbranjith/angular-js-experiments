import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  morning(event) {
    alert("Good Morning!!!");
  }

  evening(event) {
    alert("Good Evening!!");
  }

}