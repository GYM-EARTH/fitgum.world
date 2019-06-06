import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  public videos;
  firstVideo = null;
  
  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.videosService.getAll().subscribe(videos => {
      this.videos = videos.data;
    });
  
  }

  selectVideo(target) {
    this.firstVideo = target;
  }

}
