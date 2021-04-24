import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import * as converter from 'xml-js';
import { ArticleFeed } from '../interfaces/article-feed';

@Injectable({
    providedIn: 'root'
})
export class FeedsService {

    url: string[] = [
    //  'spendwithpennies.com/feed',
        // 'https://trashtalk.co/feed/',
        // 'https://www.lemonde.fr/basket/rss_full.xml'
    ]

    constructor(private http: HttpClient) {}


    // getDataBJson(): Promise < ArticleFeed[] > {
    //     return new Promise((resolve, rejects) => {
    //         this.http.request('GET', 'https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/?uuid=ac9333c3-2cef-4fb0-becf-430c8a201482').subscribe((items: any) => {
    //             items = items.articles;
    //             console.log(items);
    //             let articles: ArticleFeed[] = []
    //             for (const item of items) {
    //                 articles.push({
    //                     category: item.source.name,
    //                     title: item.title,
    //                     subTitle: '',
    //                     pubDate: item.publishedAt,
    //                     description: item.description,
    //                     creator: item.author,
    //                     media: item.urlToImage
    //                 })
    //             }
    //             console.log(articles);
    //             resolve(articles);
    //         })
    //     })
    // }

    requestByUrlTrashTalk(): Promise < ArticleFeed[] > {
        return new Promise((resolve, rejects) => {
            this.http.request('GET', 'http://www.unjourunerecette.fr/rss.xml', { responseType: 'text' }).subscribe((data) => {
                try {
                    let articles: ArticleFeed[] = []
                    const object = JSON.parse(converter.xml2json(data, { compact: true, spaces: 2 }))
                    const items = object.rss.channel.item;
                  console.log(items);
                    items.map((article) => {
                        let test = article.category.map((categ) => {
                            categ = categ._cdata
                            return categ;
                        })
                        article.category = test
                        return article
                    })
                    for (const item of items) {
                      console.log(item.category);

                      articles.push({
                            description: item.description._text,
                            // enclosure: item.enclosure._attributes,
                            guid: item.guid._text,
                            link: item.link._text,
                            pubDate: item.pubDate._text,
                            title: item.title._text,
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
