import { Component, OnInit } from '@angular/core';
import { PassportService } from '../passport.service';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile;
  
  private userID;
  private token;

  constructor(
    private passportService: PassportService,
    private cookieService: CookieService,
    private router: Router) {
      if (!this.cookieService.getCookie('login')) {
        this.router.navigate(['/signin']);
      };
      this.token = this.cookieService.getCookie('login');
    }

  ngOnInit() {
    this.passportService.getProfile(this.token).subscribe(profile => {
      
      this.profile = profile;
      this.userID = this.profile.id;
      
      this.cookieService.setCookie('userID', this.userID, {});
      
    });
  }

}
