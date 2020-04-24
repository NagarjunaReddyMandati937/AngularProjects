import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: Observable<User[]>;
  public ser;
  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
      console.log(this.users)
    });
  }

  deleteUser(uid: number) {
    this.userService.deleteUser(uid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(uid: number) {
    this.router.navigate(['user-details', uid]);
  }

  updateUser(uid: number) {
    this.router.navigate(['user-update', uid]);
  }
  onSearch(user){
    this.userService.getSearchedUsers(this.ser).subscribe(data =>
      { this.users = data;

      });

  }
}
