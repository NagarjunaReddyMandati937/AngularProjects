import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  username = 'SuperAdmin';
  password = 'nagarjuna1';

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', Validators.required],
      })
  }
  // onSubmit() {
  //   console.log(this.loginForm);
  //   if (this.loginForm.controls.username.value === this.username &&
  //     this.loginForm.controls.password.value === this.password){


  //     sessionStorage.setItem('user', JSON.stringify(this.loginForm.value));

  //   this.router.navigate(['employees']);
  // }else 
  // alert('Invalid Credentials')
  // }
  onSubmit() {
    this.userService.userAuthentication(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(response => {
     console.log(response);
      if (response) {
        sessionStorage.setItem('user', JSON.stringify(this.loginForm.value));
        this.router.navigate(['employees']);

      } else
        alert('Invalid Credentials, User Details Not Found');
    })
  }
}
