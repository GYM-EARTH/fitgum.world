import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-profile-chat',
  templateUrl: './profile-chat.component.html',
  styleUrls: ['./profile-chat.component.scss']
})
export class ProfileChatComponent implements OnInit {

  public chats;
  public messages;
  private token;
  
  constructor(
    private chatService: ChatService,
    private cookieService: CookieService) { }

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

  }

}
