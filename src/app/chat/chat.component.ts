import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';
import { ChatService } from '../chat.service';
import { SocketService } from '../socket.service';
import { EchoService } from '../echo.service';
import Echo from "laravel-echo";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private socket: SocketIOClient.Socket;

  public auth: Boolean = false;
  
  messages: [];
  public message: string;
  chatId: '';
  receivers: '';
  token;
  userId: '';



  constructor(
    private cookieService: CookieService,
    private socketService: SocketService,
    private echoService: EchoService) {
    
    // this.Echo = new Echo({
    //   broadcaster: 'socket.io',
    //   host: 'http://api.fitgum.ru:3000',
    //   auth: {
    //       headers: {
    //           'Authorization': "Bearer " + this.cookieService.getCookie('login')
    //       }
    //   }
    // });
    
    // this.Echo.private('chat.' + this.cookieService.getCookie('userId'))
    // .listen('Message', ({message}) => {
    //     console.log('good');
    // });

  }

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.auth = true;
      this.token = this.cookieService.getCookie('login');
      this.cookieService.setCookie('userId',('1'), {});
    }
    // this.echoService.privateChanel('chat.', '1');
  }

  sendMessage() {
    // this.socketService.sendMessage(this.token).subscribe(posr => this.message = "Heelo worlds");
    
  }

  getMessage() {}

}
