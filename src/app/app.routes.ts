import { Routes } from '@angular/router';
import {SurveyComponent} from './survey/survey.component';
import {CreatorComponent} from './creator/creator.component';
import {NonauthComponent} from './nonauth/nonauth.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'nonauth' },
  { path: 'nonauth', component: NonauthComponent , data: {breadcrumb: 'Опитування-не авторизовано'}},
  { path: ':id', component: SurveyComponent , data: {breadcrumb: 'Опитування'}},

  {path: 'create', component: CreatorComponent, data: {breadcrumb: 'Конструктор'}},
];
