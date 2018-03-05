import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Item } from '../../../models/item';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  item: Item;
  title: string;
  description: string;

  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    console.log(<Item>this.navParams.get('item'));
    let item = <Item>this.navParams.get('item');
    this.title = item.title;
    this.description = item.description;
  }
 
}