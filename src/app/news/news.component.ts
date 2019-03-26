import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAll().subscribe(news => this.news = news.data);
  }

}
