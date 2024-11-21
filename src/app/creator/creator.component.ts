import { Component, OnInit } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import {SurveyCreatorModule} from 'survey-creator-angular';
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};
const defaultJson ={


  "focusFirstQuestionAutomatic": false,
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>Ваучер нна навчання</h2>" +
        "<br>"+"\n" +
        "Ваучер на навчання - що змінилось в моєму житті?\n" +
        "Шановний клієнте! Запрошуємо Вас взяти участь в опитуванні, яке допоможе нам покращити якість послуги «Ваучер на навчання». Нам важлива Ваша думка!"
    }]
  }, {
    elements: [{
      name: "satisfaction-score",
      title: "Звідки Ви отримали інформацію про ваучер на навчання?",
      type: "radiogroup",
      choices: [
        { value: 1, text: "Від фахівця служби зайнятості" },
        { value: 2, text: "Від фахівця громадської організації/недержавної установи" },
        { value: 3, text: "Від фахівця іншої соціальної установи" },
        { value: 4, text: "Сайт Державної служби зайнятості" },
        { value: 5, text: "Знайомі/родичі/соцмережі" },
        { value: 6, text: "ЗМІ" },
        { value: 7, text: "Реклама" }
      ],
      isRequired: true
    }]
  }
  ],
  showQuestionNumbers: "off",
  pageNextText: "Forward",
  completeText: "Submit",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Take the Survey",
};
@Component({
  selector: 'app-creator',
  standalone: true,
  imports: [SurveyCreatorModule],
  templateUrl: './creator.component.html',
  styleUrl: './creator.component.css'
})
export class CreatorComponent implements OnInit {
  surveyCreatorModel!: SurveyCreatorModel;
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);

    creator.saveSurveyFunc = (saveNo: number, callback: Function) => {
      window.localStorage.setItem("survey-json", creator.text);
      callback(saveNo, true);
      // saveSurveyJson(
      //     "https://your-web-service.com/",
      //     creator.JSON,
      //     saveNo,
      //     callback
      // );
    };
    // creator.onUploadFile.add((_, options) => {
    //   const formData = new FormData();
    //   options.files.forEach((file: File) => {
    //     formData.append(file.name, file);
    //   });
    //   fetch("https://example.com/uploadFiles", {
    //     method: "post",
    //     body: formData
    //   }).then(response => response.json())
    //     .then(result => {
    //       options.callback(
    //         "success",
    //         // A link to the uploaded file
    //         "https://example.com/files?name=" + result[options.files[0].name]
    //       );
    //     })
    //     .catch(error => {
    //       options.callback('error');
    //     });
    // });

    this.surveyCreatorModel = creator;
  }
}

// function saveSurveyJson(url: string | URL, json: object, saveNo: number, callback: Function) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       callback(saveNo, true);
//     } else {
//       callback(saveNo, false);
//     }
//   })
//   .catch(error => {
//     callback(saveNo, false);
//   });
// }
