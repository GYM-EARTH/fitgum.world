import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {

  public article;
  private title;
  
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private titleService: Title) {
      this.title = this.titleService.getTitle();
    }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newsService.getBy(params['id']).subscribe(article => {
        this.article = article;

        this.titleService.setTitle(this.article.title),
        this.meta.updateTag({ name: 'description', content: this.article.description });
        this.meta.updateTag({property: 'og:title', content: this.article.title});
        this.meta.updateTag({property: 'og:description', content: this.article.description});
        this.meta.updateTag({property: 'og:image', content: 'https://file.fitgum.ru/' + this.article.preview});

      },  err => {
        this.router.navigate(['404']);
      });
    });
  }

  ngOnDestroy() {
    this.titleService.setTitle(this.title);
  }

}
