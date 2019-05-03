import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  constructor(private router: Router,
    private cookieService: CookieService) {
    if (!this.cookieService.getCookie('login')) {
      this.router.navigate(['/signin']);
    };
  }

  ngOnInit() {
  }

}
