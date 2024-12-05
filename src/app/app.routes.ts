import { Routes } from '@angular/router';
import {SurveyComponent} from './survey/survey.component';
import {CreatorComponent} from './creator/creator.component';

export const routes: Routes = [
  { path: ':id', component: SurveyComponent , data: {breadcrumb: 'Опитування'}},

  {path: 'create', component: CreatorComponent, data: {breadcrumb: 'Конструктор'}},
];
