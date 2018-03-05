import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Item } from '../../models/item';

@Injectable()
export class ItemDataStorageProvider {

  constructor(public storage: Storage){
 
  }
 
  getData() : Promise<Item[]> {
    return this.storage.get('todos').then(items => <Item[]>items); 
  }
 
  save(data: Item[]){
    this.storage.set('todos', data);
  }

}
