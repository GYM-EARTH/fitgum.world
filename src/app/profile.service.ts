import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from  '../environments/environment'
import { Trainers } from './trainers';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  fd;

  token;
  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<{data: Trainers[]}>(environment.trainers);
  }

  public getTop() {
    return this.http.get<{data: Trainers[]}>(environment.trainers);
  }

  public getBy(slug: string) {
    return this.http.get<{Trainers}>(`${environment.trainers}/${slug}`);
  }

  public uploadPhoto(file, token) {

    this.token = token;
    this.fd = new FormData();
  
    this.fd.append('image', file, file.name);
    
    return this.http.post<any>(environment.cabinet.avatar, this.fd, {
        headers: new HttpHeaders({
          // 'Content-Type':  '',
          'Accept': 'application/json',
          'Authorization': "Bearer " + this.token,
        })
      });

  }
}
