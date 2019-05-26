import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public transform = 0;
  public trainers;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAll().subscribe(trainers => this.trainers = trainers.data);
  }
  left() {
    if (this.transform != 0) {
      this.transform = this.transform + 370;
    }
    
  }
  next() {
    if (this.transform > -1370) {
      this.transform = this.transform - 370;
    }
  }
}
