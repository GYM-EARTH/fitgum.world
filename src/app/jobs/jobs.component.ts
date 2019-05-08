import { Component, OnInit } from '@angular/core';
import { VacanciesService } from '../vacancies.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  public jobs;
  
  constructor(private vacanciesService: VacanciesService) { }

  ngOnInit() {
    this.vacanciesService.getAll().subscribe(vacancies => this.jobs = vacancies.data);
  }

}
