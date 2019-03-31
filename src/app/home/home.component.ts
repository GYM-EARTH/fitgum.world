import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  socket: SocketIOClient.Socket;

  constructor() {

    this.socket = io.connect('http://localhost:3000');
  }

  ngOnInit() {


    this.socket.on('event2', (data: any) => {
      console.log(data.msk);
  });

  }

}
