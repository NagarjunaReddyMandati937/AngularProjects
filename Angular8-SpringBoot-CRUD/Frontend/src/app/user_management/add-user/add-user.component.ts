import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/Password.Validator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private userService: UserService,
    private router: Router, private fb: FormBuilder) { }
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

      this.submitted = true;
      this.save();
      window.alert('User Account Created');
      this.router.navigate(['user_management']);

    }
  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [''],
      confirmPassword: [''],
      cell: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    }, { validator: PasswordValidator });

  }
}
