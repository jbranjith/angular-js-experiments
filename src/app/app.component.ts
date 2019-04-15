import { Component } from '@angular/core';

import { GreetingService } from '../greeting/greeting.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GreetingService]
})
export class AppComponent {
  constructor(private greetingService: GreetingService) { }
  pFirstname = 'Roger';
  pLastName = "Federer";
  pAge = "30";
  pAboutMe = "I am a World class Tennis Player";
  
  greetingMessage = this.greetingService.morning;
}
