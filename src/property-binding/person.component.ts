import { Component, Input } from '@angular/core';

@Component({
  selector: 'person',
  template: `<h4>Person Details:</h4>
              First Name: {{ firstname }} <br> 
              Last Name: {{ lastname }} <br>
              Age: {{ age }} <br>
              About Me: <p [innerHtml]='aboutme'></p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PersonComponent {
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() age: number;
  @Input() aboutme: string;
}
