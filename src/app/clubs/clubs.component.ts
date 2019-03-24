import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  public clubs;

  constructor(private clubsService: ClubsService) { }

  ngOnInit() {
    this.clubsService.getAll().subscribe(clubs => this.clubs = clubs.data);
  }

}
