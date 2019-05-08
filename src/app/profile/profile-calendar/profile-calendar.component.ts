import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-profile-calendar',
  templateUrl: './profile-calendar.component.html',
  styleUrls: ['./profile-calendar.component.scss']
})
export class ProfileCalendarComponent implements OnInit {

  modal: boolean;

  Date = new Date();
  fullYear = this.Date.getFullYear();
  month = this.Date.getMonth();
  // date = this.Date.getDate();

  currentMonth;
  spaceDate;
  days;
  
  nameDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  nameMonth = ['Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь'];

  constructor(private router: Router, private cookieService: CookieService,) {
    if (!this.cookieService.getCookie('login')) {
      this.router.navigate(['/signin']);
    };


    this.currentMonth = this.nameMonth[this.month + 1];
    this.spaceDate = new Date(this.fullYear, this.month + 1, 0);
    this.spaceDate = this.spaceDate.getDate();
    this.days = Array(this.spaceDate).fill(0).map((x,i)=>i +1);
    

  }
  ngOnInit() {
  }

  openCalendar() {
    this.modal = true;
  }

}
