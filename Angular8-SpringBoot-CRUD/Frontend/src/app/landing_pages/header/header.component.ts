import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title = 'Full Stack Web Application Using Rest APIs';
  name = 'N.R Technologis'

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }
  isLoggedin(){
    return this.authService.isLoggedin();
  }

}
