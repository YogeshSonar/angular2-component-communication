import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent)
  private childRef: ChildComponent;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() { }

  increment(): void{
    this.childRef.increment();
  }

  decrement(): void{
    this.childRef.decrement();
  }

}
