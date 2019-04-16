import { Component } from '@angular/core';

import { RandomService } from './random.service';
@Component({
  selector: 'random',
  template: '<p>{{randomService.random}}</p>',
  providers: [RandomService]
})
export class RandomComponent {
  constructor(private randomService: RandomService) { }
}
