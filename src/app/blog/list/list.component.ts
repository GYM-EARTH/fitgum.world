import { Component, OnInit, Input } from '@angular/core';
import { BlogComponent } from '../blog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() blog;

  constructor() { }

  ngOnInit() {
  }

}
