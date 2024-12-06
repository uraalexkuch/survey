export const json = {
  "locale": "ua",

  "pages": [
    {
      "name": "page1",
      "type": "panel",
      "width": "100%",
      "elements": [

          {
            "type": "comment",
          "readOnly": true,
          "width":"100%",
          "name": "namepou",
          "colCount": 2,
          "title": {
            "ua": "Назва Вашого підприємства (установи, організації, ФОП)"
          },


        },
        {
          "type": "text",
          "readOnly": true,
          "inputType": "number",
          "startWithNewLine": false,
          "choicesLazyLoadEnabled": true,
          "choicesLazyLoadPageSize": 25,
          "width":"30%",
          "choices": [],
          "colCount": 1,
          "name": "edrpou",
          "title": {
            "ua": "ЄДРПОУ(РНОКПП для ФОП)"
          },

        },

        {
          "type": "dropdown",
          "name": "qwed",
          "startWithNewLine": false,
          "readOnly": true,
          "width":"50%",

          "title": {
            "ua": "Основний вид діяльності згідно  з КВЕД  "
          },
          "choicesByUrl": {
            "url": "/assets/kved.json",
            "valueName": "kved_number",
            "titleName": "kved_text"
          },
        }
      ]
    },

    {
      "name": "page5",
      "elements": [
        {
          "type": "dropdown",
          "name": "regionfact",
          "title": {
            "ua": "Регіон, де Ваше підприємство (установа, організація, ФОП) здійснює господарську діяльність"
          },
          "isRequired": true,

          "choices": [
            {
              "value": "UA05",
              "text": {
                "ua": "Вінницька"
              }
            },
            {
              "value": "UA07",
              "text": {
                "ua": "Волинська"
              }
            },
            {
              "value": "UA12",
              "text": {
                "ua": "Дніпропетровська"
              }
            },
            {
              "value": "UA14",
              "text": {
                "ua": "Донецька"
              }
            },
            {
              "value": "UA18",
              "text": {
                "ua": "Житомирська"
              }
            },
            {
              "value": "UA21",
              "text": {
                "ua": "Закарпатська"
              }
            },
            {
              "value": "UA23",
              "text": {
                "ua": "Запорізька"
              }
            },
            {
              "value": "UA26",
              "text": {
                "ua": "Івано-Франківська"
              }
            },
            {
              "value": "UA32",
              "text": {
                "ua": "Київська"
              }
            },
            {
              "value": "UA35",
              "text": {
                "ua": "Кіровоградська"
              }
            },
            {
              "value": "UA44",
              "text": {
                "ua": "Луганська"
              }
            },
            {
              "value": "UA46",
              "text": {
                "ua": "Львівська"
              }
            },
            {
              "value": "UA48",
              "text": {
                "ua": "Миколаївська"
              }
            },
            {
              "value": "UA51",
              "text": {
                "ua": "Одеська"
              }
            },
            {
              "value": "UA53",
              "text": {
                "ua": "Полтавська"
              }
            },
            {
              "value": "UA56",
              "text": {
                "ua": "Рівненська"
              }
            },
            {
              "value": "UA59",
              "text": {
                "ua": "Сумська"
              }
            },
            {
              "value": "UA61",
              "text": {
                "ua": "Тернопільська"
              }
            },
            {
              "value": "UA63",
              "text": {
                "ua": "Харківська"
              }
            },
            {
              "value": "UA65",
              "text": {
                "ua": "Херсонська"
              }
            },
            {
              "value": "UA68",
              "text": {
                "ua": "Хмельницька"
              }
            },
            {
              "value": "UA71",
              "text": {
                "ua": "Черкаська"
              }
            },
            {
              "value": "UA73",
              "text": {
                "ua": "Чернівецька"
              }
            },
            {
              "value": "UA74",
              "text": {
                "ua": "Чернігівська"
              }
            },
            {
              "value": "UA80",
              "text": {
                "ua": "Київ"
              }
            }
          ],
          "placeholder": {
            "ua": "Вибрати область..."
          }

        },
      ]
    },
    {
      "name": "page5r",
      "elements": [
        {
          "type": "dropdown",
          "visibleIf": "{regionfact} != '' and {regionfact} != 'UA80'",
          "name": "rayonselectfact",
          "title": {
            "ua": "Вкажіть район, де Ваше підприємство (установа, організація, ФОП) здійснює господарську діяльність ?"
          },
          "isRequired": true,

          "choices": [],
          "placeholder": {
            "ua": "Вибрати район..."
          }

        },
      ]
    },
    {
      "name": "page5g",
      "elements": [
        {
          "type": "dropdown",
          "visibleIf": "{rayonselectfact} != ''",
          "name": "gromadaselectfact",
          "title": {
            "ua": "Вкажіть громаду, де Ваше підприємство (установа, організація, ФОП) здійснює господарську діяльність ?"
          },
          "isRequired": true,

          "choices": [],
          "placeholder": {
            "ua": "Вибрати громаду..."
          }

        },
      ]
    },

    {
      "name": "page6",
      "elements": [
        {
          "type": "text",
          "name": "staff010124",
          "title": {
            "ua": "Середньоспискова чисельність персоналу станом на 01.01.2024 р."
          },
          "inputType": "number",
          "isRequired": true,
          "placeholder": {
            "ua": "Напишіть цифрами..."

          }

        },
      ]
    },
    {
      "name": "page7",
      "elements": [
        {
          "type": "text",
          "inputType": "number",
          "name": "staff010125",
          "title": {
            "ua": "Орієнтовна середньоспискова чисельність персоналу станом на 01.01.2025р."
          },
          "isRequired": true,
          "placeholder": {
            "ua": "Напишіть цифрами..."

          }

        },
      ]
    },
    {
      "name": "page8",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "staffquality",
          "title": "Кількість працівників за професійними групами, які сьогодні у Вас працюють? ",
          "clearIfInvisible": "none",
          "isRequired": true,
          "columns": [
            {
              "name": "count",
              "title": "Кількість",
              "cellType": "text",
              "isRequired": true,
              "validators": [
                {
                  "type": "numeric",
                  "minValue": 0,
                  "text": "Кількість повинна бути не менше 0."
                }
              ],
              "inputType": "number"
            }
          ],
          "cellType": "text",
          "rows": [
            {
              "value": "manager",
              "text": "Керівники/менеджери",
              "defaultValue": { "count": 0 },

            },
            {
              "value": "prof",
              "text": "Професіонали та Спеціалісти",
              "defaultValue": { "count": 0 },

            },
            {
              "value": "servants",
              "text": "Службовці та адміністративні працівники",
              "defaultValue": { "count": 0 },

            },
            {
              "value": "qwalwork",
              "text": "Кваліфіковані робітники",
              "defaultValue": { "count": 0 },

            },
            {
              "value": "notqwalwork",
              "text": "Некваліфіковані робітники",
              "defaultValue": { "count": 0 },

            }
          ]
        },
      ]
    },
    {
      "name": "page9",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "staffgender",
          "isRequired": true,
          "title": "Кількість працівників за гендерною ознакою, які сьогодні у Вас працюють? ",
          "clearIfInvisible": "none",
          "columns": [
            {
              "name": "count",
              "title": "Кількість",
              "cellType": "text",
              "isRequired": true,
              "validators": [
                {
                  "type": "numeric",
                  "minValue": 0,
                  "text": "Кількість повинна бути не менше 0."
                }
              ],
              "inputType": "number"
            }
          ],
          "cellType": "text",
          "rows": [
            {
              "value": "man",
              "text": "Чоловіки",
              "defaultValue": { "count": 0 },
              "isRequired": true
            },
            {
              "value": "woman",
              "text": "Жінки",
              "defaultValue": { "count": 0 },
              "isRequired": true
            }
          ]
        },
      ]
    },
    {
      "name": "page10",
      "elements": [
        {
          "type": "matrixdropdown",
          "isRequired": true,
          "name": "staffyears",
          "title": "Кількість працівників за віком, які сьогодні у Вас працюють? ",
          "clearIfInvisible": "none",
          "columns": [
            {
              "name": "count",
              "title": "Кількість",
              "cellType": "text",
              "isRequired": true,
              "validators": [
                {
                  "type": "numeric",
                  "minValue": 0,
                  "text": "Кількість повинна бути не менше 0."
                }
              ],
              "inputType": "number"
            }
          ],
          "cellType": "text",
          "rows": [

            {
              "value": "young",
              "text": "Молодь у віці до 25 років",
              "defaultValue": { "count": 0 },

            },
            {
              "value": "old",
              "text": "Люди віком 60+",
              "defaultValue": { "count": 0 },

            }

          ]
        },
      ]
    },
    {
      "name": "page11",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "staffqualitynow",
          "isRequired": true,
          "title": "Кількість працівників з перелічених категорій, які сьогодні у Вас працюють? ",
          "clearIfInvisible": "none",
          "columns": [
            {
              "name": "count",
              "title": "Кількість",
              "isRequired": true,
              "cellType": "text",
              "validators": [
                {
                  "type": "numeric",
                  "minValue": 0,
                  "text": "Кількість повинна бути не менше 0."
                }
              ],
              "inputType": "number"
            }
          ],
          "cellType": "text",
          "rows": [

            {
              "value": "inv",
              "text": "Люди з інвалідністю",
              "defaultValue": { "count": 0 }


            },
            {
              "value": "vpo",
              "text": "Внутрішньо переміщені особи",
              "defaultValue": { "count": 0 }

            },
            {
              "value": "veteran",
              "text": "Ветерани (ветеранки) війни",
              "defaultValue": { "count": 0 }
            },
            {
              "value": "foreign",
              "text": "Іноземні громадяни",
              "defaultValue": { "count": 0 }
            },

          ]
        },
      ]
    },
    {
      "name": "page12",
      "elements": [
        {
          "type": "checkbox",
          "name": "workregim",
          "isRequired": true,
          "title": {
            "ua": "Які форми  організації праці у Вас використовуються?"
          },
          "choices": [
            {
              "value": "1",
              "text": {
                "ua": "Робота на підприємстві"
              }
            },
            {
              "value": "2",
              "text": {
                "ua": "Дистанційна робота"
              }
            },
            {
              "value": "3",
              "text": {
                "ua": "Надомна робота"
              }
            },
            {
              "value": "4",
              "text": {
                "ua": "Гнучкий режим робочого часу"
              }
            },
            {
              "value": "5",
              "text": {
                "ua": "Вахтовий метод роботи"
              }
            }
          ]
        },
      ]
    },
    {
      "name": "page13",
      "elements": [
        {
          "type": "boolean",
          "name": "halfwork",
          "title": "Чи надаєте Ви  можливість працювати неповний робочий день?",
          "labelTrue": "Так",
          "labelFalse": "Ні",
          "isRequired": true,
          "swapOrder": true
        },
      ]
    },
    {
      "name": "page14",
      "elements": [
        {
          "type": "boolean",
          "name": "hiring2024",
          "title": "Чи стикалися Ви з труднощами при наборі персоналу у 2024 році?",
          "labelTrue": "Так",
          "labelFalse": "Ні",
          "isRequired": true,
          "swapOrder": true
        },
      ]
    },
    {
      "name": "page15",
      "elements": [
        {
          "type": "checkbox",
          "visibleIf": "{hiring2024} = true",
          "name": "trouble24",
          "title": "З якими саме труднощами Ви стикались при підборі кадрів?",
          "choices": [
            {
              "value": "trouble241",
              "text": "Дефіцит кадрів"
            },
            {
              "value": "trouble242",
              "text": "Завищені очікування претендентів щодо розміру заробітної плати"
            },
            {
              "value": "trouble243",
              "text": "Недостатня кваліфікація  претендентів"
            },

            {
              "value": "trouble244",
              "text": "Мобілізація (небажання чоловіків офіційно оформлюватись на роботу)"
            },
            {
              "value": "trouble245",
              "text": "Місце розташування підприємства (загроза особистій безпеці через війну)"
            },
            {
              "value": "trouble246",
              "text": "Відсутність у кандидатів необхідних документів (втрачені документи)"
            },
          ],
          "showOtherItem": true,
          "otherText": "Інше (вкажіть)",
          "isRequired": true,
          "colCount": 2
        },
      ]
    },
    {
      "name": "page16",
      "elements": [
        {
          "type": "boolean",
          "name": "education24",
          "title": "Чи організовували Ви навчання для ваших працівників у 2024 році?",
          "labelTrue": "Так",
          "labelFalse": "Ні",
          "isRequired": true,
          "swapOrder": true
        },
      ]
    },
    {
      "name": "page17",
      "elements": [
        {
          "type": "checkbox",
          "visibleIf": "{education24} = true",
          "name": "educationform24",
          "title": " Які форми Ви використовуєте  для навчання / підвищення кваліфікації персоналу?",
          "choices": [
            { "value": "educationform241",
              "text": "Підготовка працівників у  Центрах професійно – технічної освіти Державної служби зайнятості"},
            {"value": "educationform242",
              "text": "Підготовка працівників у власних учбових центрах"},
            {"value": "educationform243",
              "text": "Навчання на робочому місці"},
            {"value": "educationform244",
              "text":"Підтвердження повної або часткової професійної кваліфікації осіб у кваліфікаційних центрах"},
            {"value": "educationform245",
              "text":"Короткотермінові профільні тренінги від зовнішніх провайдерів"},
            {"value": "educationform246",
              "text":"Постійно діючі внутрішні тренінгові програми"},
            {"value": "educationform247",
              "text":"Освітні онлайн платформи (Coursera, Prometheus тощо)"},
            {"value": "educationform248",
              "text":"Отримання  міжнародних та професійних  сертифікацій"}
          ],
          "showOtherItem": true,
          "isRequired": true,
          "otherText": "Інше (вкажіть)",
          "colCount": 1
        },
      ]
    },
        {
          "name": "page18",
          "elements": [
            {
              "type": "dropdown",
              "name": "hiring25",
              "isRequired": true,
              "title": "Чи плануєте приймати працівників у 2025 році?",
              "clearIfInvisible": "none",
              "choices": [
                {
                  "value": "1",
                  "text": "Так"
                },
                {
                  "value": "2",
                  "text": "Ні"
                },
                {
                  "value": "3",
                  "text": "Важко відповісти"
                }
              ]
            }
          ]
        },
        {
          "name": "page19",
          "elements": [
            {
              "type": "checkbox",
              "visibleIf": "{hiring25} = '1'",
              "isRequired": true,
              "name": "hiringfuture25",
              "title": "На які робочі місця плануєте приймати працівників у 2025 році?",
              "clearIfInvisible": "none",
              "choices": [
                {
                  "value": "vac",
                  "text": "Вакантні робочі місця"
                },
                {
                  "value": "new",
                  "text": "Новостворені робочі місця"
                }

              ],
              "colCount": 2,
              "minSelectedChoices": 1
            }
          ]
        },

    {
      "name": "page20",
      "elements": [
        {
          "type": "matrixdynamic",
          "name": "hiringquality25",
          "visibleIf": "{hiring25} = '1'",
          "title": "Працівників яких професій Ви плануєте наймати у 2025 році?",
          "clearIfInvisible": "none",
          "rowCount": 1,
          "minRowCount": 1,
          "isRequired": true,
          "addRowText": "Додати професію",
          "removeRowText": "Видалити професію",
          "columns": [
            {
              "name": "profession",
              "title": "Назва професії",
              "cellType": "dropdown",
              "isRequired": true,
              "choicesLazyLoadEnabled": true,
              "choicesLazyLoadPageSize": 25,
              "width": "50%",
              "choices": []
            },
            {
              "name": "count",
              "title": "Кількість працівників",
              "cellType": "text",
              "inputType": "number",
              "width": "20%",
              "isRequired": true,
              "validators": [
                {
                  "type": "numeric",
                  "minValue": 0,
                  "text": "Кількість повинна бути не менше 0."
                }
              ]
            },
            {
              "name": "salary",
              "title": "Середній розмір заробітної плати (включаючи додаткові виплати), гривень",
              "cellType": "text",
              "isRequired": true,
              "width": "30%",
              "inputType": "number",
              "validators": [
                {
                  "type": "numeric",
                  "minValue": 8000,
                  "text": "Середній розмір заробітної плати повинен бути не менше 8000."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "page21",
      "elements": [
        {
          "type": "panel",
          "visibleIf": "{hiring25} = true",
          "name": "hiringgategory25",
          "isRequired": true,
          "title": "Чи плануєте Ви наймати працівників з нижчеперелічених категорій осіб у 2025 році?",
          "elements": [
            {
              "type": "radiogroup",
              "name": "inv",
              "title": "Люди з інвалідністю",
              "isRequired": true,
              "choices": [
                "Так",
                "Ні"
              ],
              "colCount": 0
            },
            {
              "type": "radiogroup",
              "name": "veteran",
              "startWithNewLine": false,
              "title": "Ветерани (ветеранки) війни",
              "isRequired": true,
              "choices": [
                "Так",
                "Ні"
              ],
              "colCount":0
            },
            {
              "type": "radiogroup",
              "name": "vpo",
              "title": "Внутрішньо переміщені особи",
              "isRequired": true,
              "choices": [
                "Так",
                "Ні"
              ],
              "colCount": 0
            },
            {
              "type": "radiogroup",
              "name": "old",
              "title": "Люди віком 60+",
              "isRequired": true,
              "choices": [
                "Так",
                "Ні"
              ],
              "colCount": 0
            },]

        },
      ]
    },
    {
      "name": "page22",
      "elements": [
        {
          "type": "dropdown",
          "name": "hiringwomen25",
          "visibleIf": "{hiring25} = true",
          "isRequired": true,
          "title": "Чи готові Ви наймати жінок на вакансії за умовно чоловічими професіями?",
          "clearIfInvisible": "none",
          "choices": [
            {
              "value": "1",
              "text": "Так"
            },
            {
              "value": "2",
              "text": "Ні"
            },
            {
              "value": "3",
              "text": "Важко відповісти"
            }
          ]
        },
      ]
    },
    {
      "name": "page23",
      "elements": [
        {
          "type": "dropdown",
          "name": "hiringforeign25",
          "visibleIf": "{hiring25} = true",
          "isRequired": true,
          "title": "Чи розглядаєте Ви можливість залучення іноземних працівників у 2025 році?",
          "clearIfInvisible": "none",
          "choices": [
            {
              "value": "1",
              "text": "Так"
            },
            {
              "value": "2",
              "text": "Ні"
            },
            {
              "value": "3",
              "text": "Важко відповісти"
            }
          ]
        },
      ]
    },
    {
      "name": "page24",
      "elements": [
        {
          "type": "boolean",
          "name": "salary25",
          "title": "Чи планується  підвищення розміру заробітної плати у  2025 році?",
          "labelTrue": "Так",
          "labelFalse": "Ні",
          "isRequired": true,
          "swapOrder": true
        },
      ]
    },
    {
      "name": "page25",
      "elements": [
        {
          "type": "checkbox",
          "name": "socialsupport25",
          "title": "Які додаткові програми соціальної підтримки Ви  можете надати працівникам?",
          "choices": [
            {"value": "socialsupport251",
              "text":"Надання/компенсація вартості житла (наймане житло або гуртожиток)"},
            {"value": "socialsupport252",
              "text":"Оплата проїзду"},
            {"value": "socialsupport253",
              "text":"Оплата навчання (іноземна мова, курси особистого розвитку тощо)"},
            {"value": "socialsupport254",
              "text":"Безкоштовне перевезення до місця роботи"},
            {"value": "socialsupport255",
              "text":"Оплата мобільного зв’язку"},
            {"value": "socialsupport256",
              "text":"Абонемент в спортзал/басейн"},
            {"value": "socialsupport257",
              "text":"Забезпечення харчуванням"},
            {"value": "socialsupport259",
              "text":"Приватне медичне страхування"},
            {"value": "socialsupport260",
              "text":"Допомога на оздоровлення"},
            {"value": "socialsupport261",
              "text":"Відсутні програми соціальної підтримки"}
          ],
          "showOtherItem": true,
          "minSelectedChoices": 1,
          "isRequired": true,
          "otherText": "Інше (вкажіть)",
          "colCount": 2
        },
      ]
    },
    {
      "name": "page26",
      "elements": [
        {
          "type": "checkbox",
          "name": "troubleinv",
          "title": "Які перешкоди існують, на Ваш погляд, для працевлаштування людей з інвалідністю? ",
          "choices": [
            {"value": "troubleinv1",
              "text":"Відсутність необхідної професійної кваліфікації"},
            {"value": "troubleinv2",
              "text":"Відсутність облаштованих робочих місць"},
            {"value": "troubleinv3",
              "text":"Потрібні особливі умови праці на підприємстві"},
            {"value": "troubleinv4",
              "text":"Брак знань, як поводитися з  людьми з інвалідністю"},
            {"value": "troubleinv5",
              "text":"Жодних перешкод немає"}
          ],
          "showOtherItem": true,
          "otherText": "Інше (вкажіть)",
          "colCount": 2,
          "isRequired": true,
          "maxSelectedChoices": 3,
          "minSelectedChoices": 1,
          "choicesEnableIf": "{troubleinv} notcontains 'Жодних перешкод немає' or {item} = 'Жодних перешкод немає'"
        }
      ]
    },

    {
      "name": "page27",
      "elements": [
        {
          "type": "checkbox",
          "name": "profitinv",
          "title": "Які програми збільшать кількість працевлаштованих до Вас людей з інвалідністю?",
          "choices": [
            {"value": "profitinv1",
              "text":"Фінансування навчання"},
            {"value": "profitinv2",
              "text":"Фінансова підтримка для облаштування робочих місць"},
            {"value": "profitinv3",
              "text":"Компенсаційні програми"},
            {"value": "profitinv4",
              "text":"Навчальні тренінги для працівників"},
            {"value": "profitinv5",
              "text":"Підтримка не потрібна"}
          ],
          "showOtherItem": true,
          "otherText": "Інше (вкажіть)",
          "colCount": 2,
          "isRequired": true,
          "choicesEnableIf": "{profitinv} notcontains 'Підтримка не потрібна' or {item} = 'Підтримка не потрібна'",
          "maxSelectedChoices": 3,
          "minSelectedChoices": 1
        },
      ]
    },
    {
      "name": "page28",
      "elements": [
        {
          "type": "checkbox",
          "name": "troubleveteran",
          "title": "Які перешкоди існують, на Ваш погляд, для працевлаштування ветеранів (ветеранок) війни? ",
          "choices": [
            {"value": "troubleveteran1",
              "text":"Відсутність необхідної професійної кваліфікації"},
            {"value": "troubleveteran2",
              "text":"Вимоги до високого рівня зарплати"},
            {"value": "troubleveteran3",
              "text":"Необхідні додаткові заходи для соціалізації та адаптації на робочому місці"},
            {"value": "troubleveteran4",
              "text":"Жодних перешкод немає"}
          ],
          "showOtherItem": true,
          "otherText": "Інше (вкажіть)",
          "colCount": 2,
          "choicesEnableIf": "{troubleveteran} notcontains 'Жодних перешкод немає' or {item} = 'Жодних перешкод немає'",
          "maxSelectedChoices": 3,
          "minSelectedChoices": 1,
          "isRequired": true
        },
      ]
    },
    {
      "name": "page29",
      "elements": [
        {
          "type": "checkbox",
          "name": "profitveteran",
          "title": "Які програми збільшать кількість працевлаштованих до Вас ветеранів (ветеранок) війни? ",
          "choices": [
            {"value": "profitveteran1",
              "text":"Фінансування навчання"},
            {"value": "profitveteran2",
              "text":"Компенсаційні програми"},
            {"value": "profitveteran3",
              "text":"Навчальні тренінги для працівників"},
            {"value": "profitveteran4",
              "text":"Підтримка не потрібна"}
          ],
          "showOtherItem": true,
          "choicesEnableIf": "{profitveteran} notcontains 'Підтримка не потрібна' or {item} = 'Підтримка не потрібна'",
          "otherText": "Інше (вкажіть)",
          "colCount": 2,
          "maxSelectedChoices": 3,
          "minSelectedChoices": 1,
          "isRequired": true
        },
      ]
    },
    {
      "name": "page30",
      "elements": [
        {
          "type": "checkbox",
          "name": "troublevpo",
          "title": "Які перешкоди існують, на Ваш погляд, для працевлаштування внутрішньо переміщених осіб? ",
          "choices": [
            {"value": "troublevpo1",
              "text":"Відсутність необхідної професійної кваліфікації"},
            {"value": "troublevpo2",
              "text":"Часта зміна місця проживання"},
            {"value": "troublevpo3",
              "text":"Відсутність необхідних документів"},
            {"value": "troublevpo4",
              "text":"Низька мотивація до праці "},
            {"value": "troublevpo5",
              "text":"Жодних перешкод немає"}
          ],
          "showOtherItem": true,
          "choicesEnableIf": "{troublevpo} notcontains 'Жодних перешкод немає' or {item} = 'Жодних перешкод немає'",
          "otherText": "Інше (вкажіть)",
          "colCount": 2,
          "maxSelectedChoices": 3,
          "minSelectedChoices": 1,
          "isRequired": true
        },
      ]
    },
    {
      "name": "page31",
      "elements": [
        {
          "type": "checkbox",
          "name": "profitvpo",
          "title": " Які програми збільшать кількість працевлаштованих до Вас внутрішньо переміщених осіб?",
          "choices": [
            {"value": "profitvpo1",
              "text":"Фінансування навчання"},
            {"value": "profitvpo2",
              "text":"Компенсаційні програми"},
            {"value": "profitvpo3",
              "text":"Забезпечення житлом"},
            {"value": "profitvpo4",
              "text":"Підтримка не потрібна"}
          ],
          "showOtherItem": true,
          "choicesEnableIf": "{profitvpo} notcontains 'Підтримка не потрібна' or {item} = 'Підтримка не потрібна'",
          "otherText": "Інше (вкажіть)",
          "colCount": 2,
          "maxSelectedChoices": 3,
          "minSelectedChoices": 1,
          "isRequired": true,
        },
      ]
    },
    {
      "name": "page32",
      "elements": [
        {
          "type": "checkbox",
          "name": "troubleold",
          "title": "Які перешкоди існують, на Ваш погляд, для працевлаштування  людей  віком 60+?",
          "choices": [
            {"value": "troubleold1",
              "text":"Невідповідність професійної кваліфікації"},
            {"value": "troubleold2",
              "text":"Відсутність мотивації до навчання"},
            {"value": "troubleold3",
              "text":"Низька мотивація до опанування сучасних технологій та інноваційних інструментів"},
            {"value": "troubleold4",
              "text":"Небажання офіційно оформлюватися на роботу"},
            {"value": "troubleold5",
              "text":"Жодних перешкод немає"}
          ],
          "showOtherItem": true,
          "choicesEnableIf": "{troubleold} notcontains 'Жодних перешкод немає' or {item} = 'Жодних перешкод немає'",
          "otherText": "Інше (вкажіть)",
          "colCount": 2,
          "maxSelectedChoices": 3,
          "minSelectedChoices": 1,
          "isRequired": true,
        },
      ]
    },
    {
      "name": "page33",
      "elements": [
        {
          "type": "checkbox",
          "name": "profitold",
          "title": " Які програми збільшать кількість працевлаштованих до Вас людей віком 60+?",
          "choices": [
            {"value": "troubleold5",
              "text":"Фінансування навчання"},
            {"value": "troubleold5",
              "text":"Компенсаційні виплати"},
            {"value": "troubleold5",
              "text": "Впровадження гнучких умов праці"},
            {"value": "troubleold5",
              "text":"Підтримка не потрібна"}
          ],
          "showOtherItem": true,
          "otherText": "Інше (вкажіть)",
          "choicesEnableIf": "{profitold} notcontains 'Підтримка не потрібна' or {item} = 'Підтримка не потрібна'",
          "colCount": 2,
          "maxSelectedChoices": 3,
          "minSelectedChoices": 1,
          "isRequired": true
        },
      ]
    },
    {
      "name": "page34",
      "elements": [
        {
          "type": "boolean",
          "name": "coloborationdcz",
          "title": "Чи співпрацюєте Ви з Державною службою зайнятості?",
          "labelTrue": "Так",
          "labelFalse": "Ні",
          "isRequired": true,
          "swapOrder": true
        },
      ]
    },
    {
      "name": "page35",
      "elements": [
        {
          "type": "checkbox",
          "visibleIf": "{coloborationdcz} = true",
          "name": "coloborationtrue",
          "title": "За якими напрямками Ви співпрацюєте з Державною службою зайнятості?",
          "clearIfInvisible": "none",
          "choices": [
            {"value": "coloborationtrue1",
              "text":"Підбір фахівцями служби зайнятості кандидатів на вакансії"},
            {"value": "coloborationtrue2",
              "text":"Навчання працівників під потреби підприємства"},
            {"value": "coloborationtrue3",
              "text":"Участь у  компенсаційних програмах"},
            {"value": "coloborationtrue4",
              "text":"Участь працівників у семінарах (тренінгах)"},
            {"value": "coloborationtrue5",
              "text":"Консультації з питань законодавства про зайнятість"},
            {"value": "coloborationtrue6",
              "text":"Участь у грантових програмах"}
          ],
          "showOtherItem": true,
          "otherText": "Інше (вкажіть)",
          "minSelectedChoices": 1,
          "isRequired": true,
        }

      ]
    },
    {
      "name": "page36",
      "elements": [
        {
          "type": "checkbox",
          "visibleIf": "{coloborationdcz} =false",
          "name": "coloborationtfalse",
          "title": "З яких причин Ви  НЕ співпрацюєте з Державною службою зайнятості?",
          "clearIfInvisible": "none",
          "choices": [
            {"value": "coloborationtfalse1",
              "text":"Немає необхідності"},
            {"value": "coloborationtfalse2",
              "text":"Не знаємо, чим служба зайнятості може бути корисна"},
            {"value": "coloborationtfalse3",
              "text":"Співпраця потребує додаткового навантаження: звіти, паперові документи"},
            {"value": "coloborationtfalse4",
              "text":"Маю негативний досвід попередньої співпраці"},
            {"value": "coloborationtfalse5",
              "text":"Направлення невмотивованих безробітних  на вакансії"}
          ],
          "showOtherItem": true,
          "otherText": "Інше (вкажіть)",
          "minSelectedChoices": 1,
          "isRequired": true,
        }

      ]
    },
    {
      "name": "page37",
      "elements": [
        {
          "type": "boolean",
          "name": "coloborationcpto",
          "title": "Чи співпрацюєте Ви з Центрами професійно – технічної освіти Державної служби зайнятості?",
          "labelTrue": "Так",
          "labelFalse": "Ні",
          "isRequired": true,
          "swapOrder": true
        },
      ]
    },
    {
      "name": "page38",
      "elements": [
        {
          "type": "checkbox",
          "visibleIf": "{coloborationcpto} = true",
          "name": "coloborationttrue",
          "title": "У  чому полягає Ваша співпраця з Центрами професійно – технічної освіти Державної служби зайнятості?",
          "clearIfInvisible": "none",
          "choices": [
            "Організація виробничої практики",
            "Участь у розробці освітніх або професійних стандартів",
            "Участь у наглядових радах ЦПТО",
            "Підвищення кваліфікації викладачів та майстрів виробничого навчання  ЦПТО на підприємстві",
            "Підвищення кваліфікації працівників підприємства",
            "Дуальна форма навчання"
          ],
          "showOtherItem": true,
          "otherText": "Інше (вкажіть)",
          "minSelectedChoices": 1,
          "isRequired": true,
        }
      ]
    },
    {
      "name": "page39",
      "elements": [
        {
          "type": "boolean",
          "name": "workcpto",
          "title": "Чи працюють у Вас працівники, які навчались в Центрах професійно – технічної освіти Державної служби зайнятості?",
          "labelTrue": "Так",
          "labelFalse": "Ні",
          "isRequired": true,
          "swapOrder": true
        },
      ]
    },
    {
      "name": "page40",
      "elements": [
        {
          "type": "dropdown",
          "visibleIf": "{workcpto} = true",
          "name": "levelcpto",
          "title": "Оцініть рівень підготовки  Ваших працівників, які навчались в Центрах професійно – технічної освіти Державної служби зайнятості?",
          "clearIfInvisible": "none",
          "choices": [
            {
              "value": "1",
              "text": "Цілком достатній"
            },
            {
              "value": "2",
              "text": "Скоріше достатній"
            },
            {
              "value": "3",
              "text": "Середній"
            },
            {
              "value": "4",
              "text": "Скоріше недостатній"
            },
            {
              "value": "5",
              "text": "Недостатній"
            }

          ],
          "isRequired": true
        },
      ]
    },
    {
      "name": "page41",
      "elements": [
        {
          "type": "dropdown",
          "name": "ratingdcz",
          "title": "Оцініть, наскільки Ви задоволені співпрацею з Державною службою зайнятості",
          "clearIfInvisible": "none",
          "choices": [
            {
              "value": "1",
              "text": "Задоволений"
            },
            {
              "value": "2",
              "text": "Скоріше задоволений"
            },
            {
              "value": "3",
              "text": "50/50"
            },
            {
              "value": "4",
              "text": "Скоріше незадоволений"
            },
            {
              "value": "5",
              "text": "Незадоволений"
            }
          ],
          "isRequired": true,
        },
      ]
    },
    {
      "name": "page42",
      "elements": [
        {
          "type": "checkbox",
          "name": "bestdcz",
          "title": "Які напрямки діяльності Державної служби зайнятості організовано найкраще?",
          "clearIfInvisible": "none",
          "isRequired": true,
          "choices": [

            {
              "value": "bestdcz1",
              "text": "Підбір фахівцями служби зайнятості кандидатів на вакансії"
            },
            {
              "value": "bestdcz2",
              "text": "Навчання працівників під потреби підприємства"
            },
            {
              "value": "bestdcz3",
              "text": "Компенсаційні програми"
            },
            {
              "value": "bestdcz4",
              "text": "Проведення семінарів (тренінгів)"
            },
            {
              "value": "bestdcz5",
              "text": "Консультації з питань законодавства про зайнятість"
            },
            {
              "value": "bestdcz6",
              "text": "Грантові програми"
            }

          ],
        },
      ]
    },
    {
      "name": "page43",
      "elements": [
        {
          "type": "dropdown",
          "name": "worstdcz",
          "isRequired": true,
          "title": "Які напрямки діяльності Державної служби зайнятості потрібно удосконалити?",
          "clearIfInvisible": "none",
          "choices": [

            {
              "value": "worstdcz1",
              "text": "Підбір фахівцями служби зайнятості кандидатів на вакансії"
            },
            {
              "value": "worstdcz2",
              "text": "Навчання працівників під потреби підприємства"
            },
            {
              "value": "worstdcz3",
              "text": "Компенсаційні програми"
            },
            {
              "value": "worstdcz4",
              "text": "Проведення семінарів (тренінгів)"
            },
            {
              "value": "worstdcz5",
              "text": "Консультації з питань законодавства про зайнятість"
            },
            {
              "value": "worstdcz6",
              "text": "Грантові програми"
            }
          ],
        },
      ]
    },
    {
      "name": "page44",
      "elements": [
        {
          "type": "checkbox",
          "name": "faqdcz",
          "title": "З яких питань Ви б хотіли отримати додаткову інформацію?",
          "clearIfInvisible": "none",
          "choices": [
            {
              "value": "faqdcz1",
              "text":"Підбір фахівцями служби зайнятості кандидатів на вакансії"},
            {
              "value": "faqdcz2",
              "text":"Навчання працівників під потреби підприємства"},
            {
              "value": "faqdcz3",
              "text":"Участь у  компенсаційних програмах"},
            {
              "value": "faqdcz4",
              "text":"Участь працівників у семінарах (тренінгах)"},
            {
              "value": "faqdcz5",
              "text":"Консультації з питань законодавства про зайнятість"},
            {
              "value": "faqdcz6",
              "text":"Участь у грантових програмах"},
            {
              "value": "faqdcz7",
              "text":"Додаткова інформація непотрібна"}
          ],
          "showOtherItem": true,
          "otherText": "Інше (вкажіть)",
          "minSelectedChoices": 1,
          "isRequired": true
        }
      ]
    },
    {
      "name": "page45",
      "elements": [
        {
          "type": "checkbox",
          "name": "zgoda",
          "title": "З яких питань Ви б хотіли отримати додаткову інформацію?",
          "clearIfInvisible": "none",
          "choices": [
            {
              "value": "zgoda1",
              "isRequired": true,
              "text":"Так"},
            {
              "value": "zgoda2",
              "text":"Ні"},
          ],

          "minSelectedChoices": 1,
          "isRequired": true
        }
      ]
    },
    {
      "name": "page46",
      "type": "panel",
      "title": "Будь ласка, надайте Ваші контактні дані, щоб ми могли зв’язатися з Вами та якомога швидше вирішити зазначені питання",
      "elements": [
        {
          "type": "text",
          "title": "Email",
          "isRequired": true,
          "name": "contactemail",
          "width": "50%",
          "inputType": "email",
          "placeholder": "Email"
        },
        {
          "type": "text",
          "title": "Телефон",
          "name": "contacthone",
          "width": "50%",
          "startWithNewLine": false,
          "placeholder": "Телефон"
        }
      ]
    }

  ]
}

