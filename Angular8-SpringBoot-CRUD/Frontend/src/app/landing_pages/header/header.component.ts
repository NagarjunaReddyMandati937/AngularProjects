import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title = 'Full Stack Web Application Using Rest APIs';
  name = 'N.R Technologis'

  constructor() { }

  ngOnInit() {
  }

}
