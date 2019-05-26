import { Component, OnInit } from '@angular/core';
import { FlyersService } from '../../flyers.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  flyers;
  
  constructor(private flyersService: FlyersService) { }

  ngOnInit() {
    this.flyersService.getAll().subscribe(flyers => this.flyers = flyers.data);
  }

}
