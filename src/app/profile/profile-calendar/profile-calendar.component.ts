import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../../cookie.service';
import { ProgramsService } from '../../programs.service';

@Component({
  selector: 'app-profile-calendar',
  templateUrl: './profile-calendar.component.html',
  styleUrls: ['./profile-calendar.component.scss']
})
export class ProfileCalendarComponent implements OnInit {

  modal: boolean;

  programs;
  program;

  Date = new Date();
  fullYear = this.Date.getFullYear();
  month = this.Date.getMonth();
  // date = this.Date.getDate();

  currentMonth;
  spaceDate;
  days;
  currentDay;
  
  nameDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  nameMonth = ['Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь'];

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private programsService: ProgramsService) {
    
      if (!this.cookieService.getCookie('login')) {
        this.router.navigate(['/signin']);
      };

      this.currentMonth = this.nameMonth[this.month + 1];
      this.spaceDate = new Date(this.fullYear, this.month + 1, 0);
      this.spaceDate = this.spaceDate.getDate();
      this.days = Array(this.spaceDate).fill(0).map((x,i)=>i +1);
      this.currentDay = this.Date.getDay() - 1;
  }
  
  ngOnInit() {
    this.programsService.getAll().subscribe(programs => {
      this.programs = programs.data;
      
      this.program = this.getProgram(programs.data[1].slug);
    });

  }

  openCalendar() {
    this.modal = true;
  }

  getProgram(slug: string) {
    return this.programsService.getBy(slug).subscribe(program => {
      this.program = program;
    });
  }

}
