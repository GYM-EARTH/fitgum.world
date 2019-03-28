import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../cookie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-black',
  templateUrl: './header-black.component.html',
  styleUrls: ['./header-black.component.scss']
})
export class HeaderBlackComponent implements OnInit {

  public auth: Boolean = false;

  constructor(
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.auth = true;
    }
  }

  signOut() {
    this.cookieService.deleteCookie('login');
    this.router.navigate(['/']);
  }

}
