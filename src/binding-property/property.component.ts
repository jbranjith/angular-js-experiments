import { Component, OnInit } from '@angular/core';

import { GreetingService } from '../providedin/greeting.service';

@Component({
  selector: 'property-binding',
  template: `<h4>Property Binding:</h4>
              First Name: {{ firstname }} <br>
              Last Name: {{ lastname }} <br>
              Age: <input type='text' [value]='age'> <br>
              About Me: <p [innerHtml]='aboutme'></p>
              <button bind-disabled='login'>Login</button> <br><br>
              <button [disabled]='reset'>Reset</button><br><br>
              Message: {{message}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PropertyBindingComponent implements OnInit {
  firstname = 'Roger';
  lastname = "Federer";
  age = 30;
  aboutme = "I am a World class Tennis Player";
  login: boolean = false;
  reset: boolean = true;
  message: any;

  constructor(private greetingService: GreetingService) { }
  ngOnInit() {
    this.message = this.greetingService.night();
  }
}
























/**template: `First Name: {{ firstname }} <br>
              Last Name: {{ lastname }} <br>
              Age: <input type='text' [value]='age'> <br>
              About Me: <p [innerHtml]='aboutme'></p>
              <button bind-disabled='login' >Login</button> <br><br>
              <button bind-disabled='reset' >Reset</button>` */
