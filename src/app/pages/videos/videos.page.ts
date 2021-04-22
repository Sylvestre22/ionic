import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage  {


  constructor(public http: HttpClient) {
    this.readAPI ('https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi/?apikey=58e02160a0msh27d712f99292383p1a2648jsnd30330a5b332')
      .subscribe((data) => {
        console.log(data);

      });

  }

  readAPI(URL: string) {
    return  this.http.get(URL);
  }


}
