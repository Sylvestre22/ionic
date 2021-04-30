import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ArticleFeed } from 'src/app/interfaces/article-feed';
import { FeedsService } from 'src/app/services/feeds.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  feeds: ArticleFeed[];
  constructor(private router: Router, private route: ActivatedRoute, private feed: FeedsService) { }

  async ngOnInit() {
    this.feeds = await this.feed.requestByUrlTrashTalk()
  }
}
