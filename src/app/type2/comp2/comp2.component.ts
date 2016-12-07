import { Component, OnInit } from '@angular/core';

import { Type2Service } from '../type2.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  counter: number;

  constructor(private _service: Type2Service) { 
    this.counter = 0;
  }

  ngOnInit() {
    this._service.getCounter().subscribe((num: number) => {
         this.counter = num;
     });
  }

}
