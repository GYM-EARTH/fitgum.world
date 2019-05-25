import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { CookieService } from '../../cookie.service';
import { EchoService } from '../../echo.service';
import { Router } from '@angular/router';
import { PassportService } from '../../passport.service';

@Component({
  selector: 'app-profile-chat',
  templateUrl: './profile-chat.component.html',
  styleUrls: ['./profile-chat.component.scss']
})
export class ProfileChatComponent implements OnInit {

  public chats;
  public chatID;
  public messages = [];
  public message;
  public receivers;
  public newMessages = [];
  public userID;
  
  private token;
  profile;

  constructor(
    private chatService: ChatService,
    private cookieService: CookieService,
    private echoService: EchoService,
    private router: Router,
    private passportService: PassportService) {
      if (!this.cookieService.getCookie('login')) {
        this.router.navigate(['/signin']);
      };
      
      this.token = this.cookieService.getCookie('login');
      this.passportService.getProfile(this.token).subscribe(profile => this.profile = profile);

    }


  ngOnInit() {
    this.token = this.cookieService.getCookie('login');
    this.userID = this.cookieService.getCookie('userID');
    
    this.chatService.getChats(this.token).subscribe(chats => {
      this.chats = chats;
    });

    this.echoService.privateChanel(this.userID).subscribe(message => {
      this.newMessages.push({"message": message['message'].message, "user_id": message['message'].from});
    });
  }

  onSubmit() {
    this.chatService.sendMessage(
      this.token,
      this.message,
      this.chatID,
      this.receivers[0].id
      ).subscribe(posr => {
        this.newMessages.push({"message":this.message, "user_id": this.userID});
        this.message = '';
    });
  }

  selectChat(chatID, receivers) {
    this.chatID = chatID;
    this.messages = [];
    console.log(chatID);
    
    this.receivers = receivers.filter(user => {
      return user.id != this.userID;
    });

    this.chatService.getMessages(this.token, this.chatID).subscribe(messages => {
    
      for (let index in messages) {
        let item = messages[index];
        this.messages.push(item);
      };

    });
  }

}
