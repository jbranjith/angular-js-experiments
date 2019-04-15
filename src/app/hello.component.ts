import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{lastname}}, {{firstname}}!
            </h1>. <br> your age is just: {{age}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() age: number;
}
