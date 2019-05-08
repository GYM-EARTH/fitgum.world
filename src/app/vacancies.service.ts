import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacancies } from './vacancies';
import { environment } from  '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get<{data: Vacancies[]}>(environment.vacancies);
  }

  public getBy(id: number) {
    return this.http.get<{vacancies}>(`${environment.vacancies}/${id}`);
  }
}
