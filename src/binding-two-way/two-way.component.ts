import {Component} from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayBindingComponent{
  componentMessage: string = "This is TwoWayBindingComponent";
  name: string ="BindingExample";

  clickMe(){
    alert("clicked me??");
  }

}
