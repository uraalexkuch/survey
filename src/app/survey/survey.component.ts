import { Component, OnInit } from '@angular/core';
import { Model, surveyLocalization } from "survey-core";
import { SurveyModule } from 'survey-angular-ui';

import "survey-core/i18n/ukrainian.js";
import { json } from "../models/json";
surveyLocalization.defaultLocale = "uk";

import { BreadcrumbComponent } from 'xng-breadcrumb';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [SurveyModule, BreadcrumbComponent, NgIf],
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  model: Model = null!;
  isSurvey: boolean = false;
  surveyComplete(survey: Model) {
   // const userId = 1;
   // survey.setValue("userId", userId);
    // Flatten survey result to match Sequelize model structure
    const flattenedResult = this.flattenSurveyResult({data: survey.data});

    saveSurveyResults(
      "http://localhost:3000/api/post",
      {
        //postId: userId,
       // surveyResult:
        flattenedResult  // Pass flattenedResult as surveyResult
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
onChoice(){
    this.isSurvey=!this.isSurvey;
}
  flattenSurveyResult({data}: { data: any }) {
    return {
      info: data.info,
      region: data.region,
      professionvoucher: data.professionvoucher,
      workbefore: data.workbefore ? 1 : 0,
      profworkbefore: data.profworkbefore,
      yearvoucherend: data.yearvoucherend,
      voucherafterinfluence: data.voucherafterinfluence,
      voucherafterlife: data.voucherafterlife,
      category: data.category,
      ratevoucher: data.ratevoucher,
      rateserviceoffice: data.rateserviceoffice,
      response: data.response,

    };
  }

}

function saveSurveyResults(url: string, data: {
  flattenedResult: {
    ratevoucher: any;
    professionvoucher: any;
    response: any;
    voucherafterinfluence: any;
    voucherafterlife: any;
    profworkbefore: any;
    yearvoucherend: any;
    workbefore: number;
    region: any;
    category: any;
    rateserviceoffice: any;
    info: any
  }
}) {
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
