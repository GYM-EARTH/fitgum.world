import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../cookie.service';

@Component({
  selector: 'app-header-white',
  templateUrl: './header-white.component.html',
  styleUrls: ['./header-white.component.scss']
})
export class HeaderWhiteComponent implements OnInit {

  public auth: Boolean = false;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.auth = true;
    }
  }

}
