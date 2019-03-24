import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainers } from './trainers';
import { environment } from  '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {

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
