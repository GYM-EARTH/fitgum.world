import { Component, OnInit } from '@angular/core';
// import { CookieService } from '../../cookie.service';
import { Router } from '@angular/router';
// import { PassportService } from '../../passport.service';


@Component({
  selector: 'app-header-black',
  templateUrl: './header-black.component.html',
  styleUrls: ['./header-black.component.scss']
})
export class HeaderBlackComponent implements OnInit {

  // profile;
  // private token;

  // public auth: Boolean = false;

  constructor(
    // private passportService: PassportService,
    // private cookieService: CookieService,
    private router: Router) {
      // this.token = this.cookieService.getCookie('login');
    }

  ngOnInit() {
    // if (this.cookieService.getCookie('login')) {
    //   this.auth = true;
    // }
    // this.passportService.getProfile(this.token).subscribe(profile => this.profile = profile);
  }

  // signOut() {
  //   this.cookieService.deleteCookie('login');
  //   this.router.navigate(['/signin']);
  // }

}
