import { Component } from '@angular/core';


@Component({
  selector: 'emp-messagae',
  template: '<h2>Employee Message is: {{emp_message}}<h2>'
})
export class EmployeeMessage {

  emp_message: string;
}