import { Component, OnInit } from '@angular/core';
import { Model, surveyLocalization } from "survey-core";
import { SurveyModule } from 'survey-angular-ui';

import "survey-core/i18n/ukrainian.js";
import { json } from "../models/json"; // Ensure this path is correct
surveyLocalization.defaultLocale = "uk";
import { BreadcrumbComponent } from 'xng-breadcrumb';
import { NgIf } from '@angular/common';
import { ClassifikatorItem } from '../models/classifikator-item';
import { KoattgItem } from '../models/koattg-item';
import { SurveyDataService } from '../service/survey-data.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-survey',
  standalone: true,
  providers: [SurveyDataService],
  imports: [SurveyModule, BreadcrumbComponent, NgIf, HttpClientModule],
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  model: Model = null!;
  isSurvey: boolean = false;
  cacheKey = 'classifikatorCache';
  classifikatorItems: ClassifikatorItem[] = [];
  koattgItems: KoattgItem[] = [];
  filteredRayon: KoattgItem[] = [];
  filteredGromada: KoattgItem[] = [];

  constructor(private surveyDataService: SurveyDataService) {}

  async ngOnInit() {
    try {
      // Load the classifikator and koattg items
      await this.loadClassifikator();
      await this.loadKoattg();

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
                    return {
                      ...column,
                      choicesLazyLoadEnabled: true,
                      choicesLazyLoadPageSize: 25,
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

      // Add event handlers
      survey.onChoicesLazyLoad.add(this.onChoicesLazyLoad.bind(this));
      survey.onComplete.add(this.surveyComplete.bind(this));
      survey.onComplete.add((sender) => {
        console.log("Survey completed data:", JSON.stringify(sender.data, null, 3));
      });

      this.model = survey;
    } catch (error) {
      console.error("Error initializing survey:", error);
    }
    this.filterObl();
  }

  loadClassifikator(): void {
    let data = localStorage.getItem(this.cacheKey);
    if (data) {
      this.classifikatorItems = JSON.parse(data) as ClassifikatorItem[];
    } else {
      this.surveyDataService.loadClassifikator().subscribe({
        next: (response) => {
          this.classifikatorItems = response;
          localStorage.setItem(this.cacheKey, JSON.stringify(this.classifikatorItems));
        },
        error: (error) => {
          console.error("Error loading classifikator.json:", error);
          this.classifikatorItems = [];
        }
      });
    }
  }
  loadKoattg(): void {
    this.surveyDataService.loadKoattg().subscribe({
      next: (response) => {
        this.koattgItems = response;
        console.log(this.koattgItems);
      },
      error: (error) => {
        console.error("Error loading koattg.json:", error);
        this.koattgItems = [];
      }
    });
  }

  filterObl() {
    this.model.onValueChanged.add((sender, options) => {
      if (options.name === "regionreestr") {
        this.filterRayon(options.value);
        const rayonDropdown = sender.getQuestionByName("rayonselectreestr");
        if (rayonDropdown) {
          rayonDropdown['choices'] = this.filteredRayon.map(item => ({
            value: item.rayon,
            text: item.name,
          }));
        }
      }
      if (options.name === "rayonselectreestr") {
        this.filterGromada(options.value);
        const gromadaDropdown = sender.getQuestionByName("gromadaselectreestr");
        if (gromadaDropdown) {
          gromadaDropdown['choices'] = this.filteredGromada.map(item => ({
            value: item.gromada,
            text: item.name,
          }));
        }
      }
      if (options.name === "regionfact") {
        this.filterRayon(options.value);
        const rayonDropdown = sender.getQuestionByName("rayonselectfact");
        if (rayonDropdown) {
          rayonDropdown['choices'] = this.filteredRayon.map(item => ({
            value: item.rayon,
            text: item.name,
          }));
        }
      }
      if (options.name === "rayonselectfact") {
        this.filterGromada(options.value);
        const gromadaDropdown = sender.getQuestionByName("gromadaselectfact");
        if (gromadaDropdown) {
          gromadaDropdown['choices'] = this.filteredGromada.map(item => ({
            value: item.gromada,
            text: item.name,
          }));
        }
      }
    });
  }

  filterRayon(cod_rayon: string) {
    const searchTerm = cod_rayon.toLowerCase();
    this.filteredRayon = this.koattgItems.filter((item: KoattgItem) => {
      return item.category === "P" && item.rayon.slice(0, 4).toLowerCase() === searchTerm.slice(0, 4);
    });
    console.log(this.filteredRayon);
  }

  filterGromada(cod_rayon: string) {
    const searchTerm = cod_rayon.toLowerCase();
    this.filteredGromada = this.koattgItems.filter((item: KoattgItem) => {
      return item.category === "H" && item.rayon.slice(0, 7).toLowerCase() === searchTerm.slice(0, 7);
    });
    console.log(this.filteredGromada);
  }

  onChoicesLazyLoad(sender: any, options: any) {
    try {
      const searchText = options.filter || '';
      const skip = options.skip || 0;
      const take = options.take || 25;

      let filteredItems = this.classifikatorItems;
      if (searchText) {
        filteredItems = filteredItems.filter(item =>
          item.name_posad.toLowerCase().includes(searchText.toLowerCase())
        );
      }

      const pagedItems = filteredItems.slice(skip, skip + take);
      const choices = pagedItems.map(({ cod_group_posad, name_posad }) => ({
        value: cod_group_posad,
        text: name_posad,
      }));

      options.setItems(choices, filteredItems.length);
    } catch (error) {
      console.error("Error during lazy loading choices:", error);
    }
  }

  flattenSurveyResult({ data }: { data: any }) {
    return {
      info: data?.info || '',
      region: data?.region || '',
      professionvoucher: data?.professionvoucher || '',
      workbefore: data?.workbefore ? 1 : 0,
      profworkbefore: data?.profworkbefore || '',
      yearvoucherend: data?.yearvoucherend || '',
      voucherafterinfluence: data?.voucherafterinfluence || '',
      voucherafterlife: data?.voucherafterlife || '',
      category: data?.category || '',
      ratevoucher: data?.ratevoucher || 0,
      rateserviceoffice: data?.rateserviceoffice || 0,
      response: data?.response || '',
    };
  }

  surveyComplete(survey: Model) {
    const flattenedResult = this.flattenSurveyResult({ data: survey.data });
    saveSurveyResults(
      "http://localhost:3000/api/post",
      { flattenedResult }
    );
  }

  onChoice() {
    this.isSurvey = !this.isSurvey;
  }
}

function saveSurveyResults(url: string, data: any) {
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
        console.error(`Failed to save survey results. Status: ${response.status}`);
      }
    })
    .catch(error => {
      console.error("Error saving survey results:", error);
    });
}
