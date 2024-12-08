import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { ClassifikatorItem } from '../models/classifikator-item';
import { KoattgItem } from '../models/koattg-item';
import { EmployerItem } from '../models/employers';
import {KvedItem} from '../models/kved-item';

@Injectable({
  providedIn: 'root' // Ensure it's provided in root
})
export class SurveyDataService {
  constructor(private http: HttpClient) {}
  loadClassifikator() : Observable<ClassifikatorItem[]> {
  return this.http.get<ClassifikatorItem[]>('/assets/classifikator.json');
  }

  loadDbEmployers(edrpouParam: string | null): Observable<EmployerItem[]> {
    return this.http.get<EmployerItem[]>('./assets/dbemployers.json').pipe(
      map((employers: EmployerItem[]) => {
        // Фільтруємо масив за значенням edrpou
        return employers.filter((employer: EmployerItem) => employer.edrpou === edrpouParam);
      })
    );
  }
  /*loadQwed(qwedParam: string | null): Observable<KvedItem[]> {
    return this.http.get<KvedItem[]>('./assets/kved.json').pipe(
      map((employers: KvedItem[]) => {
        // Фільтруємо масив за значенням edrpou
        return employers.filter((employer: KvedItem) => employer.kved_number === qwedParam);
      })
    );
  }*/
  loadKoattg(): Observable<KoattgItem[]> {
  return this.http.get<KoattgItem[]>('./assets/cod.json');
  }
}
