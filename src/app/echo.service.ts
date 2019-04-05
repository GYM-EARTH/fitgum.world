import { Injectable, OnInit } from '@angular/core';
import { CookieService } from './cookie.service';
import { Observable, Subject } from 'rxjs';
import Echo from "laravel-echo";
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class EchoService implements OnInit {

  private echo: Echo;
  private socketEvents$ = new Subject();
  
  constructor(private cookieService: CookieService) {

    window['io'] = io;
    this.echo = window['Echo'] = new Echo({
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

  privateChanel(id): Observable<object> {

    return new Observable<any>(observer => {
        this.echo.private('chat.1').listen('Message', data => observer.next('gfhgfh'));
    });
  }

  
}
