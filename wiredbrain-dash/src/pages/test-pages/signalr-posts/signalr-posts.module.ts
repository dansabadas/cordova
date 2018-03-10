import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignalrPostsPage } from './signalr-posts';

@NgModule({
  declarations: [
    SignalrPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(SignalrPostsPage),
  ],
})
export class SignalrPostsPageModule {}
