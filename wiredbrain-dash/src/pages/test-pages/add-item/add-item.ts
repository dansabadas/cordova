import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { Item } from '../../../models/item';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
 
  title: string;
  description: string;
 
  constructor(public navCtrl: NavController, public view: ViewController) 
  { }
 
  saveItem(){
    let newItem = new Item(this.title, this.description);
 
    this.view.dismiss(newItem);
  }
 
  close(){
    this.view.dismiss();
  }
}