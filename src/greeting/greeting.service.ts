import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  morning() {
    return "Hi! Welcome!!";
  }

  evening(){
    return "Good Bye!!";
  }
}