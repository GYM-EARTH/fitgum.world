import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClubsService } from '../clubs.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnDestroy {

  public clubs;
  private title;

  constructor(
    private clubsService: ClubsService,
    private titleService: Title,
    private meta: Meta) {
      this.title = this.titleService.getTitle();
    }

  ngOnInit() {
    this.clubsService.getAll().subscribe(clubs => {
      this.clubs = clubs.data;

      this.titleService.setTitle('Рейтинг фитнес клубов России'),
      this.meta.updateTag({ name: 'description', content: 'Компании, входящие в список лучших клубов, ранжированы по просмотрам за 2019 год.' });
      this.meta.updateTag({property: 'og:title', content: 'Рейтинг фитнес клубов России'});
      this.meta.updateTag({property: 'og:description', content: 'Компании, входящие в список лучших клубов, ранжированы по просмотрам за 2019 год.'});

      
    });


  }

  ngOnDestroy() {
    this.titleService.setTitle(this.title);
  }

}
