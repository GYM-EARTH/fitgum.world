import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-profile-calendar',
  templateUrl: './profile-calendar.component.html',
  styleUrls: ['./profile-calendar.component.scss']
})
export class ProfileCalendarComponent implements OnInit {

  public Date = new Date();
  // year = this.Date.getYear();
  month = this.Date.getMonth();
  days = this.Date.getDay();
  
  nameDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  nameMonth = ['Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь'];

  constructor(private router: Router, private cookieService: CookieService,) {
    if (!this.cookieService.getCookie('login')) {
      this.router.navigate(['/signin']);
    };
    console.log(this.month);
  }
  ngOnInit() {
  }

}
