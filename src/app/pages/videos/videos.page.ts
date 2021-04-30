import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedsService } from 'src/app/services/feeds.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosFeed } from 'src/app/interfaces/videos-feed';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage {
  feeds: VideosFeed[];
  constructor(private router: Router, private route: ActivatedRoute, private feed: FeedsService) { }

  async ngOnInit() {
    this.feeds = await this.feed.requestByUrl()
  }

}