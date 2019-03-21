import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from  '../environments/environment'
import { Trainers } from './trainers';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

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
}
