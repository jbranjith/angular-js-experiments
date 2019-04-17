import { Component, OnInit } from '@angular/core';

import { Logger } from '../log/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  message: string = "Welcome!!";

  constructor(private log: Logger) { }

  ngOnInit() {
    this.log.info("in AppComponent ngOnInit()");
  }
}
