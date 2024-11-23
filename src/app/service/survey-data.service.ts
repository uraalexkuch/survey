import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassifikatorItem } from '../models/classifikator-item';
import { KoattgItem } from '../models/koattg-item';

@Injectable({
  providedIn: 'root' // Ensure it's provided in root
})
export class SurveyDataService {
  constructor(private http: HttpClient) {}
  loadClassifikator() : Observable<ClassifikatorItem[]> {
  return this.http.get<ClassifikatorItem[]>('/assets/classifikator.json');
  }

  loadKoattg(): Observable<KoattgItem[]> {
  return this.http.get<KoattgItem[]>('./assets/cod.json');
  }
}
