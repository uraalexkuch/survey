import { Component, OnInit } from '@angular/core';
import { Model, surveyLocalization } from "survey-core";
import { SurveyModule } from 'survey-angular-ui';
import "survey-core/defaultV2.min.css";
import "survey-core/i18n/ukrainian.js";
import { json } from "../models/json";
surveyLocalization.defaultLocale = "uk";

import { BreadcrumbComponent } from 'xng-breadcrumb';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [SurveyModule, BreadcrumbComponent],
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  model: Model = null!;

  surveyComplete(survey: Model) {
    const userId = 1;
    survey.setValue("userId", userId);

    // Flatten survey result to match Sequelize model structure
    const flattenedResult = this.flattenSurveyResult(survey.data, userId);

    saveSurveyResults(
      "http://localhost:3000/api/post",
      {
        postId: userId,
        surveyResult: flattenedResult  // Pass flattenedResult as surveyResult
      }
    );
  }


  ngOnInit() {
    const survey = new Model(json);
    survey.onComplete.add(this.surveyComplete.bind(this));
    survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
    });
    this.model = survey;
  }

  flattenSurveyResult(data: any, userId: number) {
    return {
      qved: data.qved,
      staff011024: data.staff011024,
      staff011023: data.staff011023,
      staffnow: data.staffnow,
      staffcategory_managers_count: data.staffcategory?.["Керівники/менеджери"]?.Кількість || 0,
      staffcategory_professionals_count: data.staffcategory?.["Професіонали та Спеціалісти"]?.Кількість || 0,
      staffcategory_administrative_count: data.staffcategory?.["Службовці та адміністративні працівники"]?.Кількість || 0,
      staffcategory_qualified_workers_count: data.staffcategory?.["Кваліфіковані робітники"]?.Кількість || 0,
      staffcategory_unqualified_workers_count: data.staffcategory?.["Некваліфіковані робітники"]?.Кількість || 0,
      staffcategory_women_count: data.staffcategory?.Жінки?.Кількість || 0,
      staffcategory_youth_count: data.staffcategory?.["Молодь у віці до 25 років"]?.Кількість || 0,
      staffcategory_displaced_count: data.staffcategory?.["Внутрішньо переміщені особи"]?.Кількість || 0,
      staffcategory_disability_count: data.staffcategory?.["Особи з інвалідністю"]?.Кількість || 0,
      staffcategory_veterans_count: data.staffcategory?.["Ветерани ООС та війни з рф"]?.Кількість || 0,
      valuetrade: data.valuetrade,
      valuetradefuture: data.valuetradefuture,
      staff2023: data.staff2023,
      gategorynow_women_count: data.gategorynow?.Жінки?.Кількість || 0,
      gategorynow_youth_count: data.gategorynow?.["Молодь у віці до 25 років"]?.Кількість || 0,
      gategorynow_displaced_count: data.gategorynow?.["Внутрішньо переміщені особи"]?.Кількість || 0,
      gategorynow_disability_count: data.gategorynow?.["Особи з інвалідністю"]?.Кількість || 0,
      gategorynow_veterans_count: data.gategorynow?.["Ветерани ООС та війни з рф"]?.Кількість || 0,
      gategorynow_graduates_count: data.gategorynow?.["Випускники ЗПТО"]?.Кількість || 0,
      userId: userId
    };
  }
}

function saveSurveyResults(url: string, data: { postId: number; surveyResult: any }) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        console.log("Survey results saved successfully");
      } else {
        console.error("Error saving survey results");
      }
    })
    .catch(error => {
      console.error("Error saving survey results:", error);
    });
}
