import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message: string;
  counter: number; 

  constructor() { 
    this.message = "";
    this.counter = 0;
  }

  ngOnInit() {
  }

  increment(): void{
    this.message = "Increment called from Parent";
    ++this.counter;
  }

  decrement(): void{
    this.message = "Decrement called from Parent";
    --this.counter;
  }

}
