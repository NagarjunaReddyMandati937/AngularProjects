import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title = 'Full Stack Web Application Using Rest APIs';
  name = 'N.R Technologis'
  public user = JSON.parse(sessionStorage.getItem('user'));
  constructor(private router:Router,private authService:AuthenticationService) { }

  ngOnInit() {
  }
  isLoggedin(){
    return this.authService.isLoggedin();
  }
  onLogout(){
    sessionStorage.removeItem('user');
    this.router.navigate(['login'])
  }

}
