import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  counter: number;
  message: string;

  constructor() { 
    this.counter = 0;
    this.message = "";
  }

  ngOnInit() {
  }

  increment(): void{
    ++this.counter;
    this.message = "Increment called from Parent";
  }

  decrement(): void{
    --this.counter;
    this.message = "Decrement called from Parent";
  }

}
