import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  firstName: string;
  lastName: string;
  city: string;
  age: string;
  phoneNumber: string;
  qualification: string;

  constructor() { 
    this.firstName = "Yash";
    this.lastName = "Kapila";
    this.city = "Sydney";
    this.age = "";
    this.phoneNumber = "";
    this.qualification = "";
  }

  ngOnInit() {
  }

  getSecondaryDetails(event) {
    this.age = event.age;
    this.phoneNumber = event.phoneNumber;
    this.qualification = event.qualification;
  }

}
