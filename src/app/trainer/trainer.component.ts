import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';

import { ChatService } from '../chat.service';
import { CookieService } from '../cookie.service';
import { EchoService } from '../echo.service';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  public profile;
  modal: boolean = false;


  public chats;
  public chatID;
  public messages = [];
  public message;
  public receivers;
  // public newMessages = [];
  public userID;
  
  public token;



  constructor(
    private chatService: ChatService,
    private cookieService: CookieService,
    private echoService: EchoService,

    private profileService: ProfileService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.profileService.getBy(params['id']).subscribe(trainers => {
        this.profile = trainers;
      });
    });

    
    
    this.token = this.cookieService.getCookie('login');
    this.userID = this.cookieService.getCookie('userID');
    
    // this.chatService.getChats(this.token).subscribe(chats => {
    //   this.chats = chats;
    // });

    // this.echoService.privateChanel(this.userID).subscribe(message => {
    //   this.newMessages.push({"message": message['message'].message, "user_id": message['message'].from});
    // });


  }

  sendMessage(id: number) {
    this.receivers = id;
    console.log(id);
    this.modal = true;
  }


  onSubmit() {
    this.chatService.sendMessage(
      this.token,
      this.message,
      '',
      this.receivers
      ).subscribe(posr => {
        // this.newMessages.push({"message":this.message, "user_id": this.userID});
        this.message = '';
    });
  }

  // selectChat(chatID, receivers) {
  //   this.chatID = chatID;
  //   this.messages = [];
  //   console.log(chatID);
    
  //   this.receivers = receivers.filter(user => {
  //     return user.id != this.userID;
  //   });

  //   this.chatService.getMessages(this.token, this.chatID).subscribe(messages => {
    
  //     for (let index in messages) {
  //       let item = messages[index];
  //       this.messages.push(item);
  //     };

  //   });
  // }






}
