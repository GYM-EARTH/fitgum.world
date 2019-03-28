import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blog;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAll().subscribe(blog => this.blog = blog.data);
  }

}
