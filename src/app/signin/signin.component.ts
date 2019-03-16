import { Component, OnInit } from '@angular/core';
import { PassportService } from '../passport.service';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  private token;
  public data = {
    "email":"",
    "password":""
  };
  
  constructor(
    private passportService: PassportService,
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.router.navigate(['/']);
    };
  }

  onSubmit() {
    this.passportService.auth(this.data).subscribe(
      user => {
        this.cookieService.setCookie('login',(user['success'].token), {});
        this.router.navigate(['/']);
      }
    );
  }
}
