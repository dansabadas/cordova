import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Item } from '../../../models/item';
import { ItemDataStorageProvider } from '../../../providers/item-service/item-service';

@IonicPage()
@Component({
  selector: 'page-view-items',
  templateUrl: 'view-items.html',
})
export class ViewItemsPage {

  public items : Item[] = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: ItemDataStorageProvider) {
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = todos;
      }
 
    });
  }
 
  ionViewDidLoad(){
  }
 
  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    });
 
    addModal.present();
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
