import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-a-single',
  templateUrl: './a-single.component.html',
  styleUrls: ['./a-single.component.scss']
})
export class ASingleComponent implements OnInit {

  public posts;

  @Input() article;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAll().subscribe(blog => {
      this.posts = blog.data;
    });
  }

}
