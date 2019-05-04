import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public auth: Boolean = false;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.auth = true;
    }
  }

}
