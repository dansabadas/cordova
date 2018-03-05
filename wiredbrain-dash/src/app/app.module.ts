import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';

import { IonicStorageModule } from '@ionic/storage';

import { AddItemPage } from '../pages/test-pages/add-item/add-item';
import { ItemDetailPage } from '../pages/test-pages/item-detail/item-detail';
import { ItemDataStorageProvider } from '../providers/item-service/item-service';


export const firebaseConfig = {
  apiKey: "AIzaSyBb3BvkmMgjkdr_sX6mSnll-BxDvY8Ze0o",
  authDomain: "wired-coffee-3a11c.firebaseapp.com",
  databaseURL: "https://wired-coffee-3a11c.firebaseio.com",
  storageBucket: "wired-coffee-3a11c.appspot.com",
  messagingSenderId: '248233463103'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    HttpModule ,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    ItemDataStorageProvider
  ]
})
export class AppModule {}
