import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../../cookie.service';
import { PassportService } from '../../passport.service';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  public profile;
  
  private userID;
  private token;
  
  public data = {
    "name":"",
    "email":"",
    "password":"",
    "password_confirmation":""
  };

  seletedFile: File = null;

  constructor(
    private passportService: PassportService,
    private router: Router,
    private cookieService: CookieService,
    private profileService: ProfileService) {
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

  onFileSelected(event){
    this.seletedFile = event.target.files[0]
  }

  onUpload() {
    this.profileService.uploadPhoto(this.seletedFile, this.token).subscribe();
  }

  onSubmit() {
    console.log(this.data);
    this.profileService.editProfile(this.data, this.token).subscribe(
      user => {
        console.log(user);
      }
    );
  }

}
