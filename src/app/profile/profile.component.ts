import { Component, OnInit } from '@angular/core';
import { PassportService } from '../passport.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile;

  constructor(
    private passportService: PassportService) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.profileService.getBy(params['id']).subscribe(trainers => {
    //     this.profile = trainers;
    //   });
    // });

    this.passportService.getProfile().subscribe(profile => {
      this.profile = profile;
    });

  }

}
