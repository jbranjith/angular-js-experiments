import { Component, OnInit } from '@angular/core';

import { RandomService } from 'random.service';
import { GreetingService } from '../providedin/greeting.service';

@Component({
  selector: 'random',
  template: '<p>{{randomService.random}}</p>',
  providers: [RandomService]
})
export class RandomComponent implements OnInit {
  message: any;

  constructor(
    private randomService: RandomService
    
  ) { }

 ngOnInit() {
    
  }
}
