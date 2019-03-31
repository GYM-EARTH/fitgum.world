import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blog;
  public firstArticle;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAll().subscribe(blog => {
      let min = 0;
      let max = blog.data.length - 1;

      let random = Math.floor(Math.random() * (max - min + 1)) + min;

      this.blog = blog.data;
      this.firstArticle = blog.data[random];
    });
  }

}
