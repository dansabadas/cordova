import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()  // with this decorator we signal we don't need to import into the app module
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  regPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.regPage = 'RegisterPage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
