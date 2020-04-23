import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  isLoggedin() {
    if (sessionStorage.getItem('user') != null) {
      return true;

    } return false;
  }
}
