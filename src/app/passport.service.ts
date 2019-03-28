import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from  '../environments/environment'
import { CookieService } from './cookie.service';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PassportService {

  token;

  constructor(private http: HttpClient,
    private cookieService: CookieService) {
      this.token = cookieService.getCookie('login');
    }

  auth(data) {
    const body = { email: data.email, password: data.password };
    return this.http.post(environment.passport.login, body, httpOptions);
  }

  register(data) {
    const body = { name: data.name, email: data.email, password: data.password };
    return this.http.post(environment.passport.register, body, httpOptions);
  }

  getProfile() {
   

    return this.http.get<{data: User[]}>(environment.passport.profile, {     headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json',
      'Authorization': "Bearer " + this.token
    }) });
  }
}
