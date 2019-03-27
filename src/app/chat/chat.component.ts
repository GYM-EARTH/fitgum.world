import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public auth: Boolean = false;
  
  messages: [];
  message: '';
  chatId: '';
  receivers: '';
  token;
  userId: '';



  // window.io = require('socket.io-client');

  // window.Echo = new Echo({
  //     broadcaster: 'socket.io',
  //     host: window.location.hostname + ':3000',
  //     auth: {
  //         headers: {
  //             'Authorization': "Bearer " + window.getCookie('token')
  //         }
  //     }
  // });

  constructor(private cookieService: CookieService) {
    // window.Echo;

    // .private('chat.' + window.getCookie('userId'))
    //             .listen('Message', ({message}) => {
    //                 this.messages.push(message.from + ' - ' +message.message);
    //             });

  }

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.auth = true;
      this.token = this.cookieService.getCookie('login');
      console.log(this.token);
    }
  }

}
