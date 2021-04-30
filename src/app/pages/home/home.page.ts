import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { FeedsService } from '../../services/feeds.service';
import { ArticleFeed } from '../../interfaces/article-feed';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    feeds: ArticleFeed[];
    constructor(private router: Router, private route: ActivatedRoute, private feed: FeedsService) { }

    async ngOnInit() {
        this.feeds = await this.feed.requestByUrlTrashTalk()
    }

}
