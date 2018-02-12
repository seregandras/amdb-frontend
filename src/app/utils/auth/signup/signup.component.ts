import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth.service';
import { UserService } from '../../../api-module/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private userService: UserService) { }

  register() {
      this.loading = true;
      this.userService.createUser(this.model)
          .subscribe(
              data => {
                  // set success message and pass true paramater to persist the message after redirecting to the login page
                  this.router.navigate(['/login']);
              },
              error => {
                  this.loading = false;
              });
  }

}
