import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'fitgum';
  
  constructor() {
    const hours = new Date().getHours()
    const isDayTime = hours >= 6 && hours <= 18;

    if (isDayTime) {
      document.body.classList.add('white');
    } else {
      document.body.classList.add('black');
    }
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
