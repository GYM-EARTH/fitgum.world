import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from  '../environments/environment'
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

  constructor(private http: HttpClient) { }

  auth(data) {
    const body = { email: data.email, password: data.password };
    return this.http.post(environment.passport.login, body, httpOptions);
  }

  register(data) {
    const body = { name: data.name, email: data.email, password: data.password };
    return this.http.post(environment.passport.register, body, httpOptions);
  }

  getProfile(token) {
    return this.http.get<{data: User[]}>(environment.passport.profile, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': "Bearer " + token
      })
    });
  }
}
