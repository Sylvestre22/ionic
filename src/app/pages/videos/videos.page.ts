import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage  {
  // ApiUrl = '';
  // mdata= {
  //   titre: '',
  //   description: '',
  //   imageUrl; ''
  // };

  constructor(public http: HttpClient) {

   // this.readAPI ('https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/?uuid=ac9333c3-2cef-4fb0-becf-430c8a201482')
   //    .subscribe((data) => {
   //      console.log(data);
   //    });

  }

  // readAPI(URL: string) {
  //   return  this.http.get(URL);
  // }


}
