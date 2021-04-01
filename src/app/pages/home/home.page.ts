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

    pictures: string[] = [
        "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fallucanheat.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F164213930-850x560.jpeg",
        "https://static.lexpress.fr/medias_9602/w_640,h_358,c_fill,g_center/v1402301648/la-star-du-miami-heat-lebron-james-g-face-a-tim-duncan-lors-du-match-n-2-de-la-finale-nba-face-aux-spurs-le-8-juin-2014-a-san-antonio_4916337.jpg",
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2012/10/29/905472-19946209-2560-1440.jpg",
        "https://static.lexpress.fr/medias_9606/w_1000,h_563,c_fill,g_north/v1402563434/lebron-james-des-miami-heat-et-boris-diaw-des-san-antonio-spurs-a-la-lutte-lors-du-match-2-de-la-finale-de-nba-le-8-juin-2014-a-san-antonio-au-texas_4918711.jpg",
        "http://www.slate.fr/sites/default/files/styles/1200x680/public/parker_0.jpg"
    ]

        constructor(private router: Router, private route: ActivatedRoute, private feed: FeedsService) {}

        ionViewWillEnter() {
        console.log("ionViewWillEnter");

        this.router.events.subscribe(async(event) => {
            if (event instanceof NavigationEnd) {
                this.feeds = (this.route.snapshot.data.json) ? await this.feed.getDataBJson() : await this.feed.requestByUrlTrashTalk()
            }
        });

    }

        async ngOnInit() {
        this.feeds = await this.feed.requestByUrlTrashTalk()
    }

        randomPicture() {
        let min = Math.ceil(0);
        let max = Math.floor(this.pictures.length);
        return this.pictures[Math.floor(Math.random() * (max - min)) + min];
    }

}