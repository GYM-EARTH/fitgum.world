import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from './cookie.service';
import * as io from 'socket.io-client';
import { environment } from  '../environments/environment';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private host: string = "https://api.fitgum.ru:3000";
  private socket: any;
  private token;
  private httpOptions;
  
  constructor(
    private http: HttpClient,
    private cookieService: CookieService) {
      this.token = cookieService.getCookie('login');
      this.socket = io(this.host);
    }

  sendMessage(token): Observable<any> {

    const body = { "message": "hello bitch", "chatId": "", "receivers": "2" };
    return this.http.post(environment.messages.send, body, {

      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': "Bearer " + token
      })

    });
  }
  getMessage() {}

}


