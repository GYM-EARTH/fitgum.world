import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { CookieService } from '../../cookie.service';
import { EchoService } from '../../echo.service';

@Component({
  selector: 'app-profile-chat',
  templateUrl: './profile-chat.component.html',
  styleUrls: ['./profile-chat.component.scss']
})
export class ProfileChatComponent implements OnInit {

  public chats;
  public messages;
  public message;
  private token;
  
  constructor(
    private chatService: ChatService,
    private cookieService: CookieService,
    private echoService: EchoService) { }

  ngOnInit() {
    this.token = this.cookieService.getCookie('login');
    
    this.chatService.getChats(this.token).subscribe(chats => {
      this.chats = chats;
      console.log(this.chats);
    });

    this.chatService.getMessages(this.token, 1).subscribe(messages => {
      this.messages = messages;
      console.log(this.messages);
    });


    this.chatService.sendMessage(this.token).subscribe(posr => {
      console.log('message sended');
    });
   
    this.echoService.privateChanel('1').subscribe(msg => {
      console.log( msg);
    });


  }

}
