import { Component, OnInit } from '@angular/core';

import { GreetingService } from './greeting.service';

@Component({
  selector: 'greeting',
  template: '<p>{{message}}</p>',
  providers: []
})
export class GreetingComponent implements OnInit {
  message: any;
  constructor(private greetingService: GreetingService) { }

  ngOnInit() {
    this.message = this.greetingService.morning();
  }
}