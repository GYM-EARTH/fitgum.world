import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-aside',
  templateUrl: './profile-aside.component.html',
  styleUrls: ['./profile-aside.component.scss']
})
export class ProfileAsideComponent implements OnInit {
  
  @Input() profile;
  
  constructor() { }

  ngOnInit() {
  }

}
