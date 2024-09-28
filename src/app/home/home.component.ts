import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


  bannerImgs =[
    {
      id:1,
      img:'../../assets/images (1).jfif'
    },
    {
      id:2,
      img:'../../assets/download.jfif'
    },
    {
      id:3,
      img:'../../assets/wallpaper_1920x1080_light.png'
    }
  ]
  

}
