import { Component, OnInit } from '@angular/core';
import { TrainersService } from '../trainers.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  public trainers;

  constructor(private trainersService: TrainersService) { }

  ngOnInit() {
    this.trainersService.getAll().subscribe(trainers => this.trainers = trainers.data);
  }

}
