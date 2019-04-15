import { Component, Input } from '@angular/core';

@Component({
  selector: 'property-binding',
  template: `<h4>Person Details:</h4>
              First Name: {{ firstname }} <br>
              Last Name: {{ lastname }} <br>
              Age: <input type='text' [value]='age'> <br>
              About Me: <p [innerHtml]='aboutme'></p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PropertyBindingComponent {
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() age: number;
  @Input() aboutme: string;
}
