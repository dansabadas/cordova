import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewItemsPage } from './view-items';

@NgModule({
  declarations: [
    ViewItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewItemsPage),
  ],
})
export class ViewItemsPageModule {}
