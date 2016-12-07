import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() city: string;
  @Output() secondaryDetails = new EventEmitter<any>();
  age: string;
  phoneNumber: string;
  qualification: string;

  constructor() { 
    this.firstName = "";
    this.lastName = "";
    this.city = "";
    this.age = "";
    this.phoneNumber = "";
    this.qualification = "";
    console.log("Inside constructor of type1/child");
  }

  ngOnInit() { 
    console.log("Inside ngOnInit of type1/child");
  }

  ngOnChanges(changes: SimpleChanges) { 
    console.log("Inside ngOnChanges of type1/child");
    console.log(changes);
  }

  sendDataFromC2P() {
    let userDetails = {
      'age': this.age,
      'phoneNumber': this.phoneNumber,
      'qualification': this.qualification
    }

    this.secondaryDetails.next(userDetails);
  }

}
