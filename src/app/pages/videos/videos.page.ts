import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {subscribeOn} from "rxjs/operators";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(public http: HttpClient) {
    this.readAPI('');
    .subscribe({data)=>{

    })
  }
  readAPI(URL: string){
    return this.http.get(URL);
  }


}
