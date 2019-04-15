import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {  
  pFirstname = 'Roger';
  pLastName = "Federer";
  pAge = "30";
  pAboutMe = "I am a World class Tennis Player";  
}
