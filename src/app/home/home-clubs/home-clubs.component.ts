import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../../clubs.service';

@Component({
  selector: 'app-home-clubs',
  templateUrl: './home-clubs.component.html',
  styleUrls: ['./home-clubs.component.scss']
})
export class HomeClubsComponent implements OnInit {

  public clubs;

  constructor(private clubsService: ClubsService) { }

  ngOnInit() {
    this.clubsService.getAll().subscribe(clubs => this.clubs = clubs.data);
  }

}
