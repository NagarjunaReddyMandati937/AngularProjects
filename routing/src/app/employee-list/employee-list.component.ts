import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [
    {
      "id": 1,
      "name": "Nagarjuna Reddy",
      "age": 22
    },
    {
      "id": 2,
      "name": "Venkata Reddy",
      "age": 67
    },
    {
      "id": 3,
      "name": "Mastan Reddy",
      "age": 40
    },
    {
      "id": 4,
      "name": "Rami Reddy",
      "age": 38
    },
    {
      "id": 5,
      "name": "Krishna Reddy",
      "age": 21
    },
    {
      "id": 6,
      "name": "Harsha Vardhan Reddy",
      "age": 19
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
