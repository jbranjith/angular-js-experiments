import { Component } from '@angular/core';

import { GreetingService } from '.greeting.service';

@Component({
  selector: 'greeting',
  providers: [GreetingService]
})
export class GreetingComponent {

  constructor(private greetingService: GreetingService) { }


}