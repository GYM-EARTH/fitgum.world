import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  public videos;
  public firstVideo;
  url: SafeResourceUrl;
  
  constructor(private videosService: VideosService, public sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.videosService.getAll().subscribe(videos => {
      this.videos = videos.data;
    });
  
  }

  selectVideo(target) {
    this.firstVideo = 'https://www.youtube-nocookie.com/embed/' + target + '?controls=1&autoplay=1&mute=1&showinfo=0&loop=1&playlist=t2D0NOKVWXo';
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.firstVideo);  
  }

}
