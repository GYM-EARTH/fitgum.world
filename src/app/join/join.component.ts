import { Component, OnInit } from '@angular/core';
import { PassportService } from '../passport.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  data = {
    "email":""
  };
  status;
  constructor(private passportService: PassportService) { }

  ngOnInit() {
  }
  
  onSubmit() {
    this.passportService.newsletterCreate(this.data).subscribe(
      status => this.status = status
    );
    console.log(this.status)
  }

}
