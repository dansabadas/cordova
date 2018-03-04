import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { UserServiceProvider } from '../../providers/user-service/user-service';

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

  login = {
    email:'',
    passWrd:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserServiceProvider) {
    this.regPage = 'RegisterPage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signOn() {
    if (!this.login.email || !this.login.passWrd) {
      this.userService.displayAlert('Error !', "You must enter email and password");
    }
    else {
      this.userService.logOn(this.login.email, this.login.passWrd)
        .then( returned => {
          console.log("returned = ", returned);
          if (this.userService.success) {
            this.navCtrl.push(HomePage);
          }
          else {
            this.login.email = '';
            this.login.passWrd = '';  
          }
        })
    }
  }
}
