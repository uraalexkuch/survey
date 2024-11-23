import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ClassifikatorItem} from '../models/classifikator-item';
import {KoattgItem} from '../models/koattg-item';
import {Observable} from 'rxjs';
  // Assume models are defined in a separate file

@Injectable({ providedIn: 'root' })
export class SurveyDataService {
  constructor(private http: HttpClient) {}

  loadClassifikator() : Observable<ClassifikatorItem[]> {
  return this.http.get<ClassifikatorItem[]>('/assets/classifikator.json');
  }

  loadKoattg(): Observable<KoattgItem[]> {
  return this.http.get<KoattgItem[]>('./assets/data/cod.json');
  }
}
