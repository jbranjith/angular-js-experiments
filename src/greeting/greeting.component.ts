import { Component, Input } from '@angular/core';

@Component({
  selector: "greet",
  template: '<h3>Greeting: {{greeting}}',
  styles: ['{font-family: calibri; }']
})
export class GreetingComponent {

  //property binding
  @Input() greeting: string;

}