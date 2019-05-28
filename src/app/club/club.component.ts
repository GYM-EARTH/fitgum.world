import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubsService } from '../clubs.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit, OnDestroy {
  
  schema = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://google.com/article"
    },
    "headline": "Article headline",
    "image": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
     ],
    "datePublished": "2015-02-05T08:00:00+08:00",
    "dateModified": "2015-02-05T09:20:00+08:00",
    "author": {
      "@type": "Person",
      "name": "John Doe"
    },
     "publisher": {
      "@type": "Organization",
      "name": "Google",
      "logo": {
        "@type": "ImageObject",
        "url": "https://google.com/logo.jpg"
      }
    },
    "description": "A most wonderful article"
  }
  club;
  image;
  private title;

  constructor(
    private clubsService: ClubsService,
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private titleService: Title) {
      this.title = this.titleService.getTitle();
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clubsService.getBy(params['id']).subscribe(club => {
        this.club = club;

        this.titleService.setTitle(this.club.title),
        this.meta.updateTag({ name: 'description', content: this.club.description });
        this.meta.updateTag({property: 'og:title', content: this.club.title});
        this.meta.updateTag({property: 'og:description', content: this.club.description});
        this.meta.updateTag({property: 'og:image', content: 'https://file.fitgum.ru/' + this.club.cover});
      }, err => {
        this.router.navigate(['404']);
      });
    });
  }

  ngOnDestroy() {
    this.titleService.setTitle(this.title);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  preview(image) {
    this.image = image;
  }
  close() {
    this.image = null;
  }

}
