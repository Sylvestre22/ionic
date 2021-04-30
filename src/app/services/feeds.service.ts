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



  requestByUrlTrashTalk(): Promise<ArticleFeed[]> {
    return new Promise((resolve, rejects) => {

      this.http.request('GET', 'http://www.unjourunerecette.fr/rss.xml', { responseType: 'text' }).subscribe((data) => {



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
