import { Injectable, OnInit } from '@angular/core';
import { CookieService } from './cookie.service';
import Echo from "laravel-echo";
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EchoService implements OnInit {

  private echo: Echo;
  // private socketEvents$: Subject
  constructor(private cookieService: CookieService) {

    window['io'] = io;
    this.echo = window['Echo'] = new Echo({
      client: io,
      broadcaster: 'socket.io',
      host: 'https://api.fitgum.ru:3000',
      auth: {
          headers: {
              'Authorization': "Bearer " + this.cookieService.getCookie('login')
          }
          }
    });
  }

  ngOnInit(): void {

  }

  privateChanel(chanelName: string, eventName: string) {

    this.echo.private('chat.1').listen('Message', data => {
      console.log(data);
    });

    // return this.socketEvents$.asObservable().pipe(
    //   filter(event => event.type)
    // )
  }
}
