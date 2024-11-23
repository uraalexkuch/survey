import { Component, OnInit } from '@angular/core';
import { Model, surveyLocalization } from "survey-core";
import { SurveyModule } from 'survey-angular-ui';

import "survey-core/i18n/ukrainian.js";
import { json } from "../models/json"; // Ensure this path is correct
surveyLocalization.defaultLocale = "uk";
import { BreadcrumbComponent } from 'xng-breadcrumb';
import { NgIf } from '@angular/common';

interface ClassifikatorItem {
  cod_group_posad: string;
  name_posad: string;
}

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
  cacheKey = 'classifikatorCache';
  classifikatorItems: ClassifikatorItem[] = [];

  constructor() {
    // Load classifikatorItems in ngOnInit
  }

  async ngOnInit() {
    try {
      // Load the classifikator items
      await this.loadClassifikator();

      // Deep copy the JSON object and modify it
      const surveyJson = JSON.parse(JSON.stringify(json));

      if (surveyJson.pages) {
        surveyJson.pages = surveyJson.pages.map((page: any) => {
          if (page.elements) {
            page.elements = page.elements.map((element: any) => {
              if (
                element.type === "matrixdynamic" &&
                element.name === "staffqualityin24"
              ) {
                element.columns = element.columns.map((column: any) => {
                  if (column.name === "profession" && column.cellType === "dropdown") {
                    // Enable lazy loading and set placeholder
                    return {
                      ...column,
                      choicesLazyLoadEnabled: true,
                      choicesLazyLoadPageSize: 25, // Optional: Set page size
                      placeholder: "Введіть текст для пошуку..."
                    };
                  }
                  return column;
                });
              }
              return element;
            });
          }
          return page;
        });
      }

      console.log("Survey JSON with dynamic choices:", surveyJson);

      // Initialize the survey model
      const survey = new Model(surveyJson);

      // Add event handler for lazy loading choices
      survey.onChoicesLazyLoad.add(this.onChoicesLazyLoad.bind(this));

      survey.onComplete.add(this.surveyComplete.bind(this));
      survey.onComplete.add((sender, options) => {
        console.log("Survey completed data:", JSON.stringify(sender.data, null, 3));
      });

      this.model = survey;
    } catch (error) {
      console.error("Error initializing survey:", error);
    }
  }

  async loadClassifikator(): Promise<void> {
    try {
      let data = localStorage.getItem(this.cacheKey);
      if (data) {
        this.classifikatorItems = JSON.parse(data) as ClassifikatorItem[];
      } else {
        const response = await fetch('/assets/classifikator.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.classifikatorItems = await response.json();
        localStorage.setItem(this.cacheKey, JSON.stringify(this.classifikatorItems));
      }
    } catch (error) {
      console.error("Error loading classifikator.json:", error);
      this.classifikatorItems = [];
    }
  }

  onChoicesLazyLoad(sender: any, options: any) {
    const searchText = options.filter || '';
    const skip = options.skip || 0;
    const take = options.take || 25; // Adjust page size if needed

    // Filter items based on the search text
    let filteredItems = this.classifikatorItems;
    if (searchText) {
      const lowerSearchText = searchText.toLowerCase();
      filteredItems = filteredItems.filter((item: ClassifikatorItem) =>
        item.name_posad.toLowerCase().includes(lowerSearchText)
      );
    }

    // Slice the items for pagination
    const pagedItems = filteredItems.slice(skip, skip + take);

    // Map items to choices format
    const choices = pagedItems.map(({ cod_group_posad, name_posad }: ClassifikatorItem) => ({
      value: cod_group_posad,
      text: name_posad,
    }));

    // Set the items and total count for pagination
    options.setItems(choices, filteredItems.length);
  }

  onChoice() {
    this.isSurvey = !this.isSurvey;
  }

  flattenSurveyResult({ data }: { data: any }) {
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

  surveyComplete(survey: Model) {
    const flattenedResult = this.flattenSurveyResult({ data: survey.data });

    saveSurveyResults(
      "http://localhost:3000/api/post",
      {
        flattenedResult // Pass flattenedResult as surveyResult
      }
    );
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
    info: any;
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
