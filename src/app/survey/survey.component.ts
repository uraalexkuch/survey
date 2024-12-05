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
import { HttpClientModule} from '@angular/common/http';
import {EmployerItem} from '../models/employers';
import {ActivatedRoute} from '@angular/router';

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
  employerItems: EmployerItem[] = [];
  filteredRayon: KoattgItem[] = [];
  filteredGromada: KoattgItem[] = [];
  private edrpouParam: string | null = null;
  constructor(private surveyDataService: SurveyDataService,private route: ActivatedRoute) {}

  async ngOnInit() {
    try {
      this.route.paramMap.subscribe(params => {
        this.edrpouParam = params.get('id');
      });
      await this.loadClassifikator();
      await this.loadKoattg();
      await this. loadEmployers(this.edrpouParam);

      // Deep copy the JSON object and modify it
      const surveyJson = JSON.parse(JSON.stringify(json));

      if (surveyJson.pages) {
        surveyJson.pages = surveyJson.pages.map((page: any) => {
          if (page.elements) {
            page.elements = page.elements.map((element: any) => {
              if (
                element.type === "matrixdynamic" &&
                element.name === "hiringquality25"
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
      // Initialize the survey model
      const survey = new Model(surveyJson);
      // Add event handlers
      survey.onChoicesLazyLoad.add(this.onChoicesLazyLoad.bind(this));
      survey.onComplete.add(this.surveyComplete.bind(this));

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

  loadEmployers(edrpouParam: string | null): void {
    this.surveyDataService.loadDbEmployers(edrpouParam).subscribe({
      next: (response) => {
        this.employerItems = response;
        console.log(this.employerItems);

        // Якщо параметр edrpouParam задано, знайдемо відповідне підприємство
        if (edrpouParam) {
          const employer = this.employerItems.find(e => e.edrpou === edrpouParam);
          if (employer && this.model) {
            // Встановлюємо значення в модель безпосередньо
            this.model.setValue("edrpou", employer.edrpou);
            this.model.setValue("namepou", employer.name);
            this.model.setValue("qwed", employer.qwed);
          } else {
            // Якщо не знайдено, очистимо поля
            this.model.setValue("edrpou", "");
            this.model.setValue("namepou", "");
            this.model.setValue("qwed", "");
          }
        }
      },
      error: (error) => {
        console.error("Error loading koattg.json:", error);
        this.employerItems= [];
      }
    });
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
      /*if (options.name === "edrpou") {
        const selectedEdrpou = options.value;
        const employer = this.employerItems.find(e => e.edrpou === selectedEdrpou);
        if (employer) {
          // Автоматично встановлюємо назву підприємства у поле namepou
          sender.setValue("namepou", employer.name);
          sender.setValue("qwed", employer.qwed);
          // Передбачається, що qwed - це код КВЕД, який є у вашому файлі kved.json.
        } else {
          sender.setValue("namepou", "");
          sender.setValue("qwed", "");
        }
      }*/

    });
  }

  filterRayon(cod_rayon: string) {
    const searchTerm = cod_rayon.toLowerCase();
    this.filteredRayon = this.koattgItems.filter((item: KoattgItem) => {
      return item.category === "P" && item.rayon.slice(0, 4).toLowerCase() === searchTerm.slice(0, 4);
    });
  }

  filterGromada(cod_rayon: string) {
    const searchTerm = cod_rayon.toLowerCase();
    this.filteredGromada = this.koattgItems.filter((item: KoattgItem) => {
      return item.category === "H" && item.rayon.slice(0, 7).toLowerCase() === searchTerm.slice(0, 7);
    });
  }

  onChoicesLazyLoad(sender: any, options: any) {
    try {
      const searchText = options.filter?.toLowerCase() || '';
      const skip = options.skip || 0;
      const take = options.take || 25;

      let filteredItems: any[] = [];

      // Determine the dataset based on the question name
      if (options.question.name === "profession") {
        // Filter for classifikatorItems (e.g., profession dropdown)
        filteredItems = this.classifikatorItems.filter(item =>
          item.name_posad.toLowerCase().includes(searchText)
        );

        // Map results to Survey.js choices format
        const pagedItems = filteredItems.slice(skip, skip + take);
        const choices = pagedItems.map(({ cod_group_posad, name_posad }) => ({
          value: cod_group_posad,
          text: name_posad,
        }));

        options.setItems(choices, filteredItems.length);
      } else if (options.question.name === "edrpou") {
        console.log(searchText)
        // Filter for employerItems (e.g., EDRPOU dropdown)
        filteredItems = this.employerItems.filter(item =>
          item.edrpou.toLowerCase().includes(searchText)
        );

        // Map results to Survey.js choices format
        const pagedItems = filteredItems.slice(skip, skip + take);
        const choices = pagedItems.map(({ edrpou, name }) => ({
          value: edrpou,
          text: edrpou,
        }));

        options.setItems(choices, filteredItems.length);
      } else {
        console.warn("No matching dataset for question:", options.question.name);
      }
    } catch (error) {
      console.error("Error during lazy loading choices:", error);
    }
  }

  flattenSurveyResult({ data }: { data: any }) {
    console.log(data)
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
    const results = survey.data;

    survey.getAllQuestions().forEach((question: any) => {
      const questionType = question.getType();

      // Process dropdown
      if (questionType === "dropdown" && results[question.name]) {
        const selectedValue = results[question.name];
        const selectedText = question['choices']?.find((choice: any) => {
          return choice.value === selectedValue;
        })?.text;

        if (selectedText) {
          results[`${question.name}_text`] = selectedText.ua || selectedText;
        }
      }

      // Process checkbox
      if (questionType === "checkbox" && Array.isArray(results[question.name])) {
        const selectedValues = results[question.name];
        results[`${question.name}_withText`] = selectedValues.map((value: any) => {
          const choice = question['choices']?.find((choice: any) => choice.value === value);
          return {
            value,
            text: choice?.text || value
          };
        });
      }

      // Process matrixdropdown
      if (questionType === "matrixdropdown" && results[question.name]) {
        const matrixData = results[question.name];
        Object.keys(matrixData).forEach((rowValue: any) => {
          const rowText = question['rows']?.find((row: any) => row.value === rowValue)?.text;
          if (rowText) {
            results[question.name][`${rowValue}_text`] = rowText;
          }
        });
      }
    });

    console.log("Final results with text:", results);
    const flattenedResult = this.flattenSurveyResult({ data: results });
    saveSurveyResults("http://localhost:3000/api/post", { flattenedResult });
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
