import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router){}
  ngOnInit() {
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
   
    this.submitted = true;
    this.save();
    window.alert('User Account Created');
    this.router.navigate(['user_management']);
    
  }

}
