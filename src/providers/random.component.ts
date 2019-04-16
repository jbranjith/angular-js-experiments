import { Component, OnInit } from '@angular/core';

import { RandomService } from 'random.service';
import { GreetingService } from '../providedin/greeting.service';

@Component({
  selector: 'random',
  template: 'Message: {{message}} <br> <p>{{randomService.random}}</p>',
  providers: [RandomService]
})
export class RandomComponent implements OnInit {
  message: any;

  constructor(
    private randomService: RandomService,
    private greetingService: GreetingService
  ) { }

 ngOnInit() {
    this.message = this.greetingService.morning();
  }
}
