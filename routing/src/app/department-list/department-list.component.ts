import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node.Js" },
    { "id": 3, "name": "Spring" },
    { "id": 4, "name": "Collections" },
    { "id": 5, "name": "Bootstrap" },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }

}
