import { Component, OnInit } from '@angular/core';
import { FlyersService } from '../flyers.service';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.scss']
})
export class RecomendationComponent implements OnInit {
  
  flyers;
  
  constructor(private flyersService: FlyersService) { }

  ngOnInit() {
    this.flyersService.getAll().subscribe(flyers => this.flyers = flyers.data);
  }

}
