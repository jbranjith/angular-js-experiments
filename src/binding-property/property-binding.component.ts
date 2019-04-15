import { Component, Input } from '@angular/core';

@Component({
  selector: 'property-binding',
  template: `First Name: {{ firstname }} <br>
              Last Name: {{ lastname }} <br>
              Age: <input type='text' [value]='age'> <br>
              About Me: <p [innerHtml]='aboutme'></p>
              <button bind-disabled='login' >Login</button> <br><br>
              <button bind-disabled='reset' >Reset</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PropertyBindingComponent {
  firstname: string = 'Roger';
  lastname: string = "Federer";
  age: number= 30;
  aboutme: string = "I am a World class Tennis Player";
  login: boolean = false;
  reset: boolean = true;
}
