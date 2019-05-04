import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-white',
  templateUrl: './header-white.component.html',
  styleUrls: ['./header-white.component.scss']
})
export class HeaderWhiteComponent implements OnInit {

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
    this.router.navigate(['/signin']);
  }

}
