import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: {
    street: string;
    city: string;
    county: string;
  }

  constructor() {
    console.log('constructor ran..');
  }

  ngOnInit() {
    console.log('ngOnInit ran..');
    this.name = 'kiowa';
    this.age = 21;
    this.email = 'kiowa.daly@ucdconnect.ie'
    this.address = {street: '17 cherryfield', city: 'arklow', county: 'wicklow'};
  }

}
