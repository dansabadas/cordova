import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Post } from '../../../models/post';

@IonicPage()
@Component({
  selector: 'page-http-posts',
  templateUrl: 'http-posts.html',
})
export class HttpPostsPage {
  posts: Post[];
  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {
    let random : number = Math.floor(Math.random() * 2) + 1;
    let url : string = random == 1 ? 'http://localhost:51167/api/values/postings' : 'https://www.reddit.com/r/gifs/new/.json?limit=10';  //10.0.3.2
    this
      .http
      .get(url)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.posts = random == 1 ? data : data.data.children.map(child => child.data);
        },
        error => {
          let theAlert = this.alertCtrl.create({
            title: "Network Error",
            subTitle: url + " " + error, 
            buttons: ['OK']
          });
          theAlert.present(); 
        }
    );
  }

  ionViewDidLoad() {
  }

}
