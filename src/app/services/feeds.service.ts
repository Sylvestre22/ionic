import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import * as converter from 'xml-js';
import { ArticleFeed } from '../interfaces/article-feed';
import { VideosFeed } from '../interfaces/videos-feed';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
=======

  constructor(private http: HttpClient) {}
>>>>>>> 6e8c050cf06387208873e57d75a0333f078d7f6c

  requestByUrlTrashTalk(): Promise<ArticleFeed[]> {
    return new Promise((resolve, rejects) => {
<<<<<<< HEAD
      this.http.request('GET', 'http://www.unjourunerecette.fr/rss.xml', { responseType: 'text' }).subscribe((data) => {
=======
      this.http.request('GET', 'https://recipe-book-c81b8.firebaseio.com/recipes.json').subscribe((items: any) => {
        items = items.articles;
        console.log(items);
        let articles: ArticleFeed[] = []
        console.log(articles);
>>>>>>> 6e8c050cf06387208873e57d75a0333f078d7f6c

        try {
          let articles: ArticleFeed[] = []
          const object = JSON.parse(converter.xml2json(data, { compact: true, spaces: 2 }))
          const items = object.rss.channel.item
          items.map((article) => {
          })
          for (const item of items) {
            articles.push({
              title: item.title._text,
              description: item.description._cdata,
              pubDate: item.pubDate._text,
              enclosure: item.enclosure._attributes.url,
              link: item.link._text,
            })
          }
          resolve(articles);
        } catch (err) {
          rejects(false)
        }
      });
    });
  }

  requestByUrl(): Promise<VideosFeed[]> {
    return new Promise((resolve, rejects) => {
      this.http.request('GET', 'http://www.unjourunerecette.fr/rss.xml', { responseType: 'text' }).subscribe((data) => {

        try {
          let articles: VideosFeed[] = []
          const object = JSON.parse(converter.xml2json(data, { compact: true, spaces: 2 }))
          const items = object.rss.channel.item
          items.map((article) => {
          })
          for (const item of items) {
            articles.push({
              title: item.title._text,
              description: item.description._cdata,
              pubDate: item.pubDate._text,
              enclosure: item.enclosure._attributes.url,
              link: item.link._text,
            })
          }
          resolve(articles);
        } catch (err) {
          rejects(false)
        }
      });
    });
  }






}
