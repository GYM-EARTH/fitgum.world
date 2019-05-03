import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-profile-calendar',
  templateUrl: './profile-calendar.component.html',
  styleUrls: ['./profile-calendar.component.scss']
})
export class ProfileCalendarComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService,) {
    if (!this.cookieService.getCookie('login')) {
      this.router.navigate(['/signin']);
    };
  }
  ngOnInit() {
  }

}
