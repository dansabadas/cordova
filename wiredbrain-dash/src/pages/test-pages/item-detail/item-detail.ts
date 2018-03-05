import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Item } from '../../../models/item';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  title: string;
  description;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    let item = <Item>this.navParams.get('item');
    this.title = item.title;
    this.description = item.description;
  }
}