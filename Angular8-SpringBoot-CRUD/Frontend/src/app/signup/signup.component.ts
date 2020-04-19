import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.user)
      .subscribe(data => {
       // this.gotoList();
        console.log(data), error => console.log(error);
      })
    this.user = new User();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    window.alert('User Account Created');
  }

  // gotoList() {
  //   this.router.navigate(['/employees']);
  // }
}