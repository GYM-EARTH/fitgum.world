import { Component, OnInit } from '@angular/core';
import { TrainersService } from '../trainers.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public trainers;

  constructor(private trainersService: TrainersService) { }

  ngOnInit() {
    this.trainersService.getAll().subscribe(trainers => this.trainers = trainers.data);
  }

}
