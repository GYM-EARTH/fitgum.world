import { Component, OnInit, OnDestroy } from '@angular/core';
import { PassportService } from '../passport.service';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  private title;

  constructor(
    private passportService: PassportService,
    private cookieService: CookieService,
    private router: Router,
    private meta: Meta,
    private titleService: Title
  ) {
    this.title = this.titleService.getTitle();
  }

  public data = {
    "name":"",
    "email":"",
    "password":""
  };

  ngOnInit() {

    this.titleService.setTitle('Регистрация'),
    this.meta.updateTag({ name: 'description', content: 'Откройте Ваш мир по фитнесу' });
    this.meta.updateTag({property: 'og:title', content: 'Регистрация'});
    this.meta.updateTag({property: 'og:description', content: 'Откройте Ваш мир по фитнесу'});

    if (this.cookieService.getCookie('login')) {
      this.router.navigate(['/']);
    };
  }


  ngOnDestroy() {
    this.titleService.setTitle(this.title);
  }

  onSubmit() {
    this.passportService.register(this.data).subscribe(
      user => {
        this.cookieService.setCookie('login',(user['success'].token), {});
        this.router.navigate(['/']);
      }
    );
  }

}
