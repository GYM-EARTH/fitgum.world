import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flyers } from './flyers';
import { environment } from  '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FlyersService {
  
  constructor(private http: HttpClient) { }
  public getAll() {
    return this.http.get<{data: Flyers[]}>(environment.flyers);
  }

  public getTop() {
    return this.http.get<{data: Flyers[]}>(environment.flyers);
  }

  public getBy(slug: string) {
    return this.http.get<{Flyers}>(`${environment.flyers}/${slug}`);
  }
}
