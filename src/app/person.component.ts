import { Component, Input } from '@angular/core';

@Component({
  selector: 'person',
  template: `<h1>Hello {{llname}}, {{ffname}}!
            </h1>. <br> your age is just: {{aag}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PersonComponent {
  @Input() fname: string;
  @Input() lname: string;
  @Input() ag: number;
}
