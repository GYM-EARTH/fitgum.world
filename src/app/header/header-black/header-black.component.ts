import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../cookie.service';

@Component({
  selector: 'app-header-black',
  templateUrl: './header-black.component.html',
  styleUrls: ['./header-black.component.scss']
})
export class HeaderBlackComponent implements OnInit {

  public auth: Boolean = false;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.auth = true;
    }
  }

}
