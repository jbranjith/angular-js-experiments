import { Component, OnInit } from '@angular/core';

import { CalcService } from './calc.service';

@Component({
  selector: 'calc',
  template: '<h4>Provided In[service] Example: </h4>Sum(3,3): {{sum}}',
  providers: [CalcService]
})
export class CalcComponent implements OnInit {
  sum: number;

  constructor(private calcService: CalcService) { }

  ngOnInit() {
    this.sum = this.calcService.add(3, 3);
  }

}