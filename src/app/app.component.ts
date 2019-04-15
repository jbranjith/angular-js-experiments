import { Component } from '@angular/core';
import {GreetingService} from '../greeting/greeting.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GreetingService]
})
export class AppComponent {
  constructor(private greetingService: GreetingService){}

  aa = 'Ranjith';
  bb = "Sekar";
  cc = "10";
  greetingMessage = this.greetingService.morning;  
}
