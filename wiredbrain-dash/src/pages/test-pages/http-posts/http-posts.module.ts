import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpPostsPage } from './http-posts';

@NgModule({
  declarations: [
    HttpPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(HttpPostsPage),
  ],
})
export class HttpPostsPageModule {}
