import { Component, Input } from '@angular/core';

@Component({
  selector: "greet",
  template: '<h3>{{greeting}}',
  styles: ['{font-family: calibri; }']  
})
export class GreetingComponent {

  @Input() greeting: string;

}