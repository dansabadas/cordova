import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-http-posts',
  templateUrl: 'http-posts.html',
})
export class HttpPostsPage {
  posts: any;
  constructor(public navCtrl: NavController, public http: Http) {
    this
      .http
      .get('http://localhost:51167/api/values/postings')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.posts = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HttpPostsPage');
  }

}
