import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../shared/Password.Validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private userService: UserService,
    private router: Router,private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName:['', [Validators.required, Validators.minLength(3)]],
      lastName:['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [''],
      confirmPassword: [''],
      cell: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    }, { validator: PasswordValidator });


  }
  user: User = new User();
  submitted = false;

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
    console.log(this.signupForm.value);
    this.submitted = true;
    this.save();
    window.alert('User Account Created');
  }

  // gotoList() {
  //   this.router.navigate(['/employees']);
  // }
}
