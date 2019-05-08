import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videos } from './videos';
import { environment } from  '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) { }
  
  public getAll() {
    return this.http.get<{data: Videos[]}>(environment.videos);
  }
}
