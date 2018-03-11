import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HubConnection, TransportType } from '@aspnet/signalr-client';


@IonicPage()
@Component({
  selector: 'page-signalr-posts',
  templateUrl: 'signalr-posts.html',
})
export class SignalrPostsPage {
  private hubConnection: HubConnection;
  private nick = '';
  private message = '';
  private messages: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public sendMessage(): void {
    this.hubConnection
      .invoke('Send', `${this.nick}: ${this.message}`)
      .then(() => this.message = '')
      .catch(err => console.log(err));
  }

  ionViewDidLoad() {
    
    this.nick = window.prompt('Your name:', 'John');

    this.hubConnection = new HubConnection('http://localhost:51167/loopy', {
      transport: TransportType.WebSockets
    }); //http://localhost:59479/signalr/loopy http://localhost:51167/loopy
    
    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log(err, 'Error while establishing connection :('));

      this.hubConnection.on('Send', (receivedMessage: string) => {
        console.log(receivedMessage);
        this.messages.push(receivedMessage);
      });
  }

}
