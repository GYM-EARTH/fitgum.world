import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../cookie.service';
import { Router } from '@angular/router';
import { PassportService } from '../../passport.service';

@Component({
  selector: 'app-header-white',
  templateUrl: './header-white.component.html',
  styleUrls: ['./header-white.component.scss']
})
export class HeaderWhiteComponent implements OnInit {

  public auth: Boolean = false;
  profile;
  private token;
  constructor(
    private passportService: PassportService,
    private cookieService: CookieService,
    private router: Router) {
      this.token = this.cookieService.getCookie('login');
    }

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.auth = true;
    }

    this.passportService.getProfile(this.token).subscribe(profile => this.profile = profile);

  }

  signOut() {
    this.cookieService.deleteCookie('login');
    this.router.navigate(['/signin']);
  }

}
