import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../auth.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router';
import { User } from '../../api-module/model/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticateService
  ) { }

  ngOnInit() {
    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.user.email, this.user.password).subscribe(
      data => {
        this.router.navigate{{this.returnUrl}};
      },
      error => {
        this.loading = false;
      }
    )
  }

}
