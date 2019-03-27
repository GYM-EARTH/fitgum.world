import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from  '../environments/environment';
import { CookieService } from './cookie.service';
import { Chat } from './chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService) { }

  sendMessage(data) {
    console.log(this.cookieService.getCookie('login'));
    const body = { message: 'hello', chatId: '', receivers: 1 };
    return this.http.post(environment.chat.send, body, {

      
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Accept': 'application/json',
          'Authorization': "Bearer" + this.cookieService.getCookie('login')
        })
      

    });
  }
  GetMessage() {
    return this.http.get<{data: Chat[]}>(environment.chat.get);
  }


}
