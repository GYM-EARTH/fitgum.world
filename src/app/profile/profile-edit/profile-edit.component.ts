import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';
import { PassportService } from '../../passport.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  public profile;
  
  private userID;
  private token;

  constructor(
    private passportService: PassportService,
    private router: Router,
    private cookieService: CookieService) {
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
