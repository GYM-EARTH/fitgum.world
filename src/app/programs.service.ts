import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Programs } from './programs';
import { environment } from  '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http: HttpClient) { }
  
  public getAll() {
    return this.http.get<{data: Programs[]}>(environment.programs);
  }
  
  public getBy(slug: string) {
    return this.http.get<{Programs}>(`${environment.programs}/${slug}`);
  }
}
