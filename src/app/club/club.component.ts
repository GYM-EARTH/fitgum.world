import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubsService } from '../clubs.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {

  club;
  image;

  constructor(
    private clubsService: ClubsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clubsService.getBy(params['id']).subscribe(club => {
        this.club = club;
      });
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  preview(image) {
    this.image = image;
  }
  close() {
    this.image = null;
  }

}
