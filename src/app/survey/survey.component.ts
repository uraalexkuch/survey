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
import {ActivatedRoute, Router} from '@angular/router';
import {KvedItem} from '../models/kved-item';

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
  qwedItems: KvedItem[] = [];
  filteredRayon: KoattgItem[] = [];
  filteredGromada: KoattgItem[] = [];
  private edrpouParam: string | null = null;
  constructor(private surveyDataService: SurveyDataService,private route: ActivatedRoute, private routelink:Router) {}

  async ngOnInit() {
    try {
      this.route.paramMap.subscribe(params => {
        this.route.paramMap.subscribe(params => {
          const id = params.get('id');
          if (!id || id.length < 7) {
            this.routelink.navigateByUrl('/nonauth');
          } else {
            this.edrpouParam = id;
          }
        });

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
      survey.onValueChanging.add((sender, options) => {
        if (options.name === "contactPhone") {
          options.value = this.formatPhoneNumber(options.value);
        }
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

  loadEmployers(edrpouParam: string | null): void {
    this.surveyDataService.loadDbEmployers(edrpouParam).subscribe({
      next: (response) => {
               if (response.length > 0) {
          this.employerItems = response;
        } else {
                 this.routelink.navigateByUrl('/nonauth');
               }
        console.log(this.employerItems);

        // Якщо параметр edrpouParam задано, знайдемо відповідне підприємство
        if (edrpouParam) {
          const employer = this.employerItems[0]//.find(e => e.edrpou === edrpouParam);
          if (employer && this.model) {
            // Встановлюємо значення в модель безпосередньо
            this.model.setValue("edrpou", employer.edrpou);
            this.model.setValue("namepou", employer.name);
            this.model.setValue("qwed_text", employer.qwed_text);

          } else {
            // Якщо не знайдено, очистимо поля
            this.model.setValue("edrpou", "");
            this.model.setValue("namepou", "");
            this.model.setValue("qwed_text", "");

          }
        }
      },
      error: (error) => {
        console.error("Error loading koattg.json:", error);
        this.employerItems= [];
      }
    });
  }
 /* loadQwed(qwedParam: string | null): void {
    this.surveyDataService.loadQwed(qwedParam).subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.qwedItems = response;
          this.qwedItems.find(e => e.kved_number === qwedParam);
          console.log(this.qwedItems);
        }
      },
      error: (error) => {
        console.error("Error loading kved.json:", error);
        this.qwedItems = [];
      }
    });
  }*/
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
  }

  filterGromada(cod_rayon: string) {
    const searchTerm = cod_rayon.toLowerCase();
    this.filteredGromada = this.koattgItems.filter((item: KoattgItem) => {
      return item.category === "H" && item.rayon.slice(0, 7).toLowerCase() === searchTerm.slice(0, 7);
    });
  }
  formatPhoneNumber(phone: string): string {
    if (!phone) return ''; // Перевірка на порожнє значення
    phone = phone.replace(/\D/g, ''); // Видаляємо всі нецифрові символи

    if (phone.startsWith('38')) {
      phone = phone.slice(2); // Видаляємо "38", якщо воно є на початку
    } else if (phone.startsWith('0')) {
      phone = phone.slice(1); // Видаляємо "0", якщо воно є на початку
    }

    if (phone.length > 10) {
      phone = phone.slice(0, 10); // Якщо більше 10 цифр, обрізаємо
    }

    if (phone.length === 10) {
      return `+38(${phone.slice(0, 3)})${phone.slice(3, 6)}-${phone.slice(6, 8)}-${phone.slice(8, 10)}`;
    } else {
      return `+38(${phone.slice(0, 3)})${phone.slice(3, 6)}-${phone.slice(6, 8)}-${phone.slice(8)}`.replace(/-$/, ''); // Формат для неповного номера
    }
  }
  onChoicesLazyLoad(sender: any, options: any) {
    try {
      const searchText = options.filter?.toLowerCase() || '';
      const skip = options.skip || 0;
      const take = options.take || 25;

      if (!this.classifikatorItems || this.classifikatorItems.length === 0) {
        options.setItems([], 0);
        return;
      }
      if (options.question.name === "profession") {
        // Фільтрація за текстом
        const filteredItems = this.classifikatorItems.filter(item =>
          item.name_posad.toLowerCase().includes(searchText)
        );
        // Пагінація
        const pagedItems = filteredItems.slice(skip, skip + take);
        // Форматування даних для Survey.js
        const choices = pagedItems.map(({ cod_group_posad, name_posad }) => ({
          value: `${cod_group_posad};${name_posad}`, // Зберігати унікальний value
          text: name_posad // Відображати назву професії
        }));

        // Встановлення вибору
        options.setItems(choices, filteredItems.length);
      } else {
        options.setItems([], 0);
      }
    } catch (error) {
      console.error("Error during lazy loading choices:", error);
      options.setItems([], 0);
    }
  }
  flattenSurveyResult({ data }: { data: any }) {
    console.log(data?.hiringgategory25);
    return {
      namepou: data?.namepou || '',
      edrpou: data?.edrpou || '',
      kved_number: this.employerItems[0].qwed || 0,
      kved_text: this.employerItems[0].qwed_text || '',
      regionplan: this.employerItems[0].codkatottg || '',
      regionfact: data?.regionfact || '',
      rayonfact: data?.rayonselectfact || '',
      rayonfact_text: data?.regionfact_text || '',
      gromadafact: data?.gromadaselectfact || '',
      gromadafact_text: data?.gromadaselectfact_text || '',
      staff010124: data?.staff010124 || 0,
      staff010125: data?.staff010125 || 0,
      staffquality_manager: data?.staffquality.manager.count || 0,
      staffquality_manager_text: data?.staffquality.manager_text || '',
      staffquality_prof: data?.staffquality.prof.count || 0,
      staffquality_prof_text: data?.staffquality.prof_text || '',
      staffquality_servants: data?.staffquality.servants.count || 0,
      staffquality_servants_text: data?.staffquality.servants_text || '',
      staffquality_qwalwork: data?.staffquality.qwalwork.count || 0,
      staffquality_qwalwork_text: data?.staffquality.qwalwork_text || '',
      staffquality_notqwalwork: data?.staffquality.notqwalwork.count || 0,
      staffquality_notqwalwork_text: data?.staffquality.notqwalwork_text || '',
      staffgender_man: data?.staffgender.man.count || 0,
      staffgender_man_text: data?.staffgender.man_text || '',
      staffgender_woman: data?.staffgender.woman.count || 0,
      staffgender_woman_text: data?.staffgender.woman_text || '',
      staffyears_young: data?.staffyears.young.count || 0,
      staffyears_young_text: data?.staffyears.young_text || '',
      staffyears_old: data?.staffyears.old.count || 0,
      staffyears_old_text: data?.staffyears.old_text || '',
      staffqualitynow_inv: data?.staffqualitynow.inv.count || 0,
      staffqualitynow_inv_text: data?.staffqualitynow.inv_text || '',
      staffqualitynow_vpo: data?.staffqualitynow.vpo.count || 0,
      staffqualitynow_vpo_text: data?.staffqualitynow.vpo_text || '',
      staffqualitynow_veteran: data?.staffqualitynow.veteran.count || 0,
      staffqualitynow_veteran_text: data?.staffqualitynow.veteran_text || '',
      staffqualitynow_foreign: data?.staffqualitynow.foreign.count || 0,
      staffqualitynow_foreign_text: data?.staffqualitynow.foreign_text || '',
      workregim_workregim1: data?.workregim_withText.find((i: any) => i.value === 'workregim1')?.value || 0,
      workregim_workregim1_text: data?.workregim_withText.find((i: any) => i.value === 'workregim1')?.text || '',
      workregim_workregim2: data?.workregim_withText.find((i: any) => i.value === 'workregim2')?.value || 0,
      workregim_workregim2_text: data?.workregim_withText.find((i: any) => i.value === 'workregim2')?.text || '',
      workregim_workregim3: data?.workregim_withText.find((i: any) => i.value === 'workregim3')?.value || 0,
      workregim_workregim3_text: data?.workregim_withText.find((i: any) => i.value === 'workregim3')?.text || '',
      workregim_workregim4: data?.workregim_withText.find((i: any) => i.value === 'workregim4')?.value || 0,
      workregim_workregim4_text: data?.workregim_withText.find((i: any) => i.value === 'workregim4')?.text || '',
      workregim_workregim5: data?.workregim_withText.find((i: any) => i.value === 'workregim5')?.value || 0,
      workregim_workregim5_text: data?.workregim_withText.find((i: any) => i.value === 'workregim5')?.text || '',
      halfwork:data?.halfwork,
      hiring24:data?.hiring2024,
      hiring24_trouble241: data?.trouble24_withText.find((i: any) => i.value === 'trouble241')?.value || 0,
      hiring24_trouble241_text: data?.trouble24_withText.find((i: any) => i.value === 'trouble241')?.text || '',
      hiring24_trouble242: data?.trouble24_withText.find((i: any) => i.value === 'trouble242')?.value || 0,
      hiring24_trouble242_text: data?.trouble24_withText.find((i: any) => i.value === 'trouble242')?.text || '',
      hiring24_trouble243: data?.trouble24_withText.find((i: any) => i.value === 'trouble243')?.value || 0,
      hiring24_trouble243_text: data?.trouble24_withText.find((i: any) => i.value === 'trouble243')?.text || '',
      hiring24_trouble244: data?.trouble24_withText.find((i: any) => i.value === 'trouble244')?.value || 0,
      hiring24_trouble244_text: data?.trouble24_withText.find((i: any) => i.value === 'trouble244')?.text || '',
      hiring24_trouble245: data?.trouble24_withText.find((i: any) => i.value === 'trouble245')?.value || 0,
      hiring24_trouble245_text: data?.trouble24_withText.find((i: any) => i.value === 'trouble245')?.text || '',
      hiring24_trouble246: data?.trouble24_withText.find((i: any) => i.value === 'trouble246')?.value || 0,
      hiring24_trouble246text: data?.trouble24_withText.find((i: any) => i.value === 'trouble246')?.text || '',
      hiring24_troubleOther: data?.trouble24_withText.find((i: any) => i.value === 'other')?.value || 0,
      hiring24_troubleOthertext: data?.['trouble24-Comment'] || '',
      education24:data?.education24,
      education24_educationform241: data?.educationform24_withText.find((i: any) => i.value === 'educationform241')?.value || 0,
      education24_educationform241_text: data?.educationform24_withText.find((i: any) => i.value === 'educationform241')?.text || '',
      education24_educationform242: data?.educationform24_withText.find((i: any) => i.value === 'educationform242')?.value || 0,
      education24_educationform242_text: data?.educationform24_withText.find((i: any) => i.value === 'educationform242')?.text || '',
      education24_educationform243: data?.educationform24_withText.find((i: any) => i.value === 'educationform243')?.value || 0,
      education24_educationform243_text: data?.educationform24_withText.find((i: any) => i.value === 'educationform243')?.text || '',
      education24_educationform244: data?.educationform24_withText.find((i: any) => i.value === 'educationform244')?.value || 0,
      education24_educationform244_text: data?.educationform24_withText.find((i: any) => i.value === 'educationform244')?.text || '',
      education24_educationform245: data?.educationform24_withText.find((i: any) => i.value === 'educationform245')?.value || 0,
      education24_educationform245_text: data?.educationform24_withText.find((i: any) => i.value === 'educationform245')?.text || '',
      education24_educationform246: data?.educationform24_withText.find((i: any) => i.value === 'educationform246')?.value || 0,
      education24_educationform246_text: data?.educationform24_withText.find((i: any) => i.value === 'educationform246')?.text || '',
      education24_educationform247: data?.educationform24_withText.find((i: any) => i.value === 'educationform247')?.value || 0,
      education24_educationform247_text: data?.educationform24_withText.find((i: any) => i.value === 'educationform247')?.text || '',
      education24_educationformOther: data?.educationform24_withText.find((i: any) => i.value === 'other')?.value || 0,
      education24_educationformOthertext: data?.['educationform24-Comment'] || '',
      hiring25:data?.hiring25,
      hiring25_text:data?.hiring25_text,
      hiringfuture25_vac:data?.hiringfuture25_withText.find((i: any) => i.value === 'vac')?.value || '',
      hiringfuture25_vac_text:data?.hiringfuture25_withText.find((i: any) => i.value === 'vac')?.text || '',
      hiringfuture25_new:data?.hiringfuture25_withText.find((i: any) => i.value === 'new')?.value || '',
      hiringfuture25_new_text:data?.hiringfuture25_withText.find((i: any) => i.value === 'new')?.text || '',
      hiringquality25_profession: data?.hiringquality25.map((item: any) => item.profession?.split(';').map((profession: string) => profession.trim()).join(';')).join('||') || '',
      hiringquality25_count:data?.hiringquality25.map((item: any) => item.count).join('||') || 0,
      hiringquality25_salary:data?.hiringquality25.map((item: any) => item.salary).join('||') || '',
      hiringgategory25_inv : data?.hiringgategory25?.find((item: any) => item.name === 'inv')?.value || '',
      hiringgategory25_veteran :data?.hiringgategory25?.find((item: any) => item.name === 'veteran')?.value || '',
      hiringgategory25_vpo : data?.hiringgategory25?.find((item: any) => item.name === 'vpo')?.value || '',
      hiringgategory25_old : data?.hiringgategory25?.find((item: any) => item.name === 'old')?.value || ''

    }
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
    console.log("Final results post:", flattenedResult );

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
