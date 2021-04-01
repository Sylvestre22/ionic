import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import * as converter from 'xml-js';
import { ArticleFeed } from '../interfaces/article-feed';

@Injectable({
    providedIn: 'root'
})
export class FeedsService {

    url: string[] = [
        'https://trashtalk.co/feed/',
        // 'https://www.lemonde.fr/basket/rss_full.xml'
    ]

    constructor(private http: HttpClient) {}

    getDataBJson(): Promise < ArticleFeed[] > {
        return new Promise((resolve, rejects) => {
            this.http.request('GET', '/assets/data/Articles.json').subscribe((items: any) => {
                items = items.articles;
                console.log(items);
                let articles: ArticleFeed[] = []
                for (const item of items) {
                    articles.push({
                        category: item.source.name,
                        title: item.title,
                        subTitle: '',
                        pubDate: item.publishedAt,
                        description: item.description,
                        creator: item.author,
                        media: item.urlToImage
                    })
                }
                console.log(articles);
                resolve(articles);
            })
        })
    }

    requestByUrlTrashTalk(): Promise < ArticleFeed[] > {
        return new Promise((resolve, rejects) => {
            this.http.request('GET', 'https://trashtalk.co/feed/', { responseType: 'text' }).subscribe((data) => {
                try {
                    let articles: ArticleFeed[] = []
                    const object = JSON.parse(converter.xml2json(data, { compact: true, spaces: 2 }))
                    const items = object.rss.channel.item
                    items.map((article) => {
                        let test = article.category.map((categ) => {
                            categ = categ._cdata
                            return categ;
                        })
                        article.category = test
                        return article
                    })
                    for (const item of items) {
                        articles.push({
                            category: item.category,
                            title: item.title._text,
                            subTitle: '',
                            pubDate: item.pubDate._text,
                            description: item.description._cdata,
                            creator: item['dc:creator']._cdata
                        })
                    }
                    resolve(articles);
                } catch (err) {
                    rejects(false)
                }
            })
        })
    }
}