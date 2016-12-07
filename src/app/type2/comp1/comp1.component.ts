import { Component, OnInit } from '@angular/core';

import { Type2Service } from '../type2.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  counter: number;

  constructor(private _service: Type2Service) { 
    this.counter = 0;
  }

  ngOnInit() {
  }

  increment(): void{
    this._service.setCounter(++this.counter);
  }

  decrement(): void{
    this._service.setCounter(--this.counter);
  }
}
