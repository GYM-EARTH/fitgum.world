import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacanciesService } from '../../vacancies.service';

@Component({
  selector: 'app-show-jobs',
  templateUrl: './show-jobs.component.html',
  styleUrls: ['./show-jobs.component.scss']
})
export class ShowJobsComponent implements OnInit {

  job;

  constructor(
    private vacanciesService: VacanciesService,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.vacanciesService.getBy(params['id']).subscribe(job => {
          this.job = job;
        });
      });
    }

}
