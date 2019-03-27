import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from './cookie.service';
import * as io from 'socket.io-client';
import { environment } from  '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = 'http://api.fitgum.ru:3000';
  private socket = io(this.url);
  private token;
  constructor(
    private http: HttpClient,
    cookieService: CookieService) {
      this.token = cookieService.getCookie('login');
    }

  sendMessage(data) {
    console.log(this.token);
    const body = { "message": "hello", "chatId": "", "receivers": "2" };

    return this.http.post(environment.chat.send, body, {

      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': "Bearer" + this.token
      })

    });
  }
  getMessage() {}
}
