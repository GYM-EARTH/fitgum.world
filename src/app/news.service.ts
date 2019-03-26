import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news';
import { environment } from  '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  public getAll() {
    return this.http.get<{data: News[]}>(environment.news);
  }

  public getTop() {
    return this.http.get<{data: News[]}>(environment.news);
  }

  public getBy(slug: string) {
    return this.http.get<{News}>(`${environment.news}/${slug}`);
  }
}
