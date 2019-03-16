import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from  '../environments/environment'

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
}
