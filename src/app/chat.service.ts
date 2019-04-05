import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from  '../environments/environment';
import { Observable } from 'rxjs';
import { Chat } from './chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient) { }

  sendMessage(token, message, chatID, receivers): Observable<any> {
    const body = {
      "message": message.toString(),
      "chatId": chatID.toString(),
      "receivers": receivers.toString()
    };
    
    return this.http.post(environment.messages.send, body, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': "Bearer " + token
      })
    });
  }
  
  getMessages(token, chanel) {
    return this.http.get<{data: Chat[]}>(`${environment.messages.get}/${chanel}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': "Bearer " + token
      })
    });
  }
  
  getChats(token) {
    return this.http.get<{data: Chat[]}>(environment.messages.chats, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': "Bearer " + token
      })
    });
  }

}
