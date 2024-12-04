export const json= {
  "locale": "ua",

  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "namepou",
          "title": {
            "ua": "Назва Вашого підприємства (установи, організації, ФОП)"
          },
          "isRequired": true,
          "placeholder": {
            "ua": "Напишіть..."

          }

        },
      ]
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "inputType": "number",
          "name": "edrpou",
          "title": {
            "ua": "ЄДРПОУ Вашого підприємства (установи, організації) (РНОКПП для ФОП)"
          },

          "isRequired": true,
          "placeholder": {
            "ua": "Напишіть..."

          }

        },
      ]
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "dropdown",
          "name": "qved",
          //"choicesLazyLoadEnabled": true,
         // "choicesLazyLoadPageSize": 25,
          "title": {
            "ua": "Основний вид діяльності згідно  з КВЕД  "
          },
          "choicesByUrl": {
            "url": "/assets/kved.json",
            "valueName": "kved_number",
            "titleName": "kved_text"
          },
          "isRequired": true,
          "placeholder": {
            "ua": "Оберіть зі списку..."
          }
        }
      ]
    },

    {
      "name": "page4",
      "elements": [
        {
          "type": "dropdown",
          "name": "regionreestr",
          "title": {
            "ua": "Регіон, де зареєстровано  Ваше підприємство (установа, організація, ФОП)"
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
      "name": "page4r",

      "elements": [
        {
          "type": "dropdown",
          "visibleIf": "{regionreestr} != '' and {regionreestr} != 'UA80'",
          "name": "rayonselectreestr",
          "title": {
            "ua": "Вкажіть район, де зареєстровано  Ваше підприємство (установа, організація, ФОП)?"
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
      "name": "page4g",
      "elements": [
        {
          "type": "dropdown",
          "visibleIf": "{rayonselectreestr} != ''",
          "name": "gromadaselectreestr",
          "title": {
            "ua": "Вкажіть громаду, де зареєстровано  Ваше підприємство (установа, організація, ФОП)?"
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
              "isRequired": true,
            },
            {
              "value": "prof",
              "text": "Професіонали та Спеціалісти",
              "isRequired": true,
            },
            {
              "value": "servants",
              "text": "Службовці та адміністративні працівники",
              "isRequired": true,
            },
            {
              "value": "qwalwork",
              "text": "Кваліфіковані робітники",
              "isRequired": true,
            },
            {
              "value": "notqwalwork",
              "text": "Некваліфіковані робітники",
              "isRequired": true,
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
          "name": "staffquality",
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
              "isRequired": true
            },
            {
              "value": "woman",
              "text": "Жінки",
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
          "name": "staffquality",
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
              "isRequired": true
            },
            {
              "value": "old",
              "text": "Люди віком 60+",
              "isRequired": true
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
          "name": "staffquality",
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
              "isRequired": true,

            },
            {
              "value": "vpo",
              "text": "Внутрішньо переміщені особи",
              "isRequired": true
            },
            {
              "value": "veteran",
              "text": "Ветерани (ветеранки) війни",
              "isRequired": true
            },
            {
              "value": "foreign",
              "text": "Іноземні громадяни",
              "isRequired": true
            },

          ]
        },
      ]
    },
    {
      "name": "page12",
      "elements": [
        {
          "type": "dropdown",
          "name": "workregim",
          "title": {
            "ua": "Який формат роботи у Вас використовується?"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": {
                "ua": "Робота у службовому (виробничому) приміщенні або на території роботодавця"
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
                "ua": "Змішаний формат роботи"
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
            "Наявність / посилення дефіциту кадрів",
            "Невідповідність очікувань претендентів щодо розміру заробітної плати",
            "Завищені очікування претендентів щодо соціального пакету",
            "Труднощі, пов’язані із місцем розташування підприємства",
            "Мобілізація (небажання чоловіків офіційно оформлюватись на роботу)",
            "Недостатня кваліфікація  претендентів ",
            "Відсутність у кандидатів необхідних документів (втрачені документи)",
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
          "title": "Які форми Ви використовуєте  для навчання / підвищення кваліфікації персоналу?",
          "choices": [
            "Підготовка працівників у  Центрах професійно – технічної освіти Державної    служби зайнятості",
            "Підготовка працівників у власних учбових центрах",
            "Навчання на робочому місці",
            "Короткотермінові профільні тренінги від зовнішніх провайдерів",
            "Постійнодіючі внутрішні тренінгові програми",
            "Періодичні тренінги від постачальників продукції або обладнання",
            "Освітні онлайн-платформи (Coursera, Prometheus тощо)",
            "Отримання  міжнародних та професійних  сертифікацій",
            "Підтвердження повної або часткової професійної кваліфікації осіб у кваліфікаційних центрах"
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
        },
      ]
    },
    {
      "name": "page19",
      "elements": [
        {
          "type": "chekbox",
          "visibleIf": "{hiring25} = true",
          "isRequired": true,
          "name": "valuetrade24",
          "title": "На які  робочі місця плануєте приймати працівників у 2025 році?",
          "clearIfInvisible": "none",
          "choices": [
            "Новостворені робочі місця",
             "Вакантні робочі місця"

          ],
          "colCount": 2,
          "minSelectedChoices": 1,
        },
      ]
    },
    {
      "name": "page20",
      "elements": [
        {
          "type": "matrixdynamic",
          "name": "hiringquality25",
          "visibleIf": "{hiring25} = true",
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
              "choicesLazyLoadEnabled": true,
              "choicesLazyLoadPageSize": 25,
              "width": "50%",
            "cellCssClass": "wrap-text",
              "choices": [] // Choices will be dynamically loaded in the component
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
              "width": "30%",
              "inputType": "number",
              "validators": [
                {
                  "type": "numeric",
                  "minValue": 0,
                  "text": "Кількість повинна бути не менше 0."
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
              "colCount": 2
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
              "colCount": 2
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
              "colCount": 2
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
            "Приватне медичне страхування",
            "Безкоштовна доставка до місця роботи ",
            "Абонемент в спортзал/басейн",
            "Забезпечення харчуванням",
            "Надання/компенсація вартості житла (наймане житло або гуртожиток)",
            "Оплата мобільного зв’язку",
            "Оплата проїзду",
            "Допомога на оздоровлення",
            "Оплата навчання (іноземна мова, курси особистого розвитку тощо)",
            "Відсутні програми соціальної підтримки"
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
          "title": "Які перешкоди існують, на Ваш погляд, для працевлаштування людей з інвалідністю? (оберіть до 3 ключових перешкод)",
          "choices": [
            "Відсутність облаштованих робочих місць",
            "Потрібні особливі умови праці на підприємстві",
            "Брак знань, як поводитися з людьми з інвалідністю",
            "Жодних перешкод немає"
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
          "title": "Які програми збільшать кількість працевлаштованих до Вас людей з інвалідністю? (оберіть не більше 3)",
          "choices": [
            "Фінансова підтримка для облаштування робочих місць",
            "Компенсаційні програми",
            "Фінансування навчання ",
            "Підтримка не потрібна"
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
          "title": "Які перешкоди існують, на Ваш погляд, для працевлаштування ветеранів (ветеранок) війни? (оберіть до 3 ключових перешкод)",
          "choices": [
            "Відсутність необхідної професійної кваліфікації",
            "Вимоги до високого рівня зарплати",
            "Необхідні додаткові заходи для соціалізації та адаптації на робочому місці",
            "Жодних перешкод немає"
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
          "title": "Які програми збільшать кількість працевлаштованих до Вас ветеранів (ветеранок) війни? (оберіть  не більше 3)",
          "choices": [
            "Фінансова підтримка для облаштування робочих місць",
            "Компенсаційні програми",
            "Фінансування навчання ",
            "Підтримка не потрібна"
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
          "title": "Які перешкоди існують, на Ваш погляд, для працевлаштування внутрішньо переміщених осіб? (оберіть до 3 ключових перешкод)",
          "choices": [
            "Відсутність необхідної професійної кваліфікації",
            "Пересторога щодо низької мотивації до праці",
            "Ці люди не звертаються за роботою",
            "Пересторога щодо частої зміни місця проживання",
            "Відсутність необхідних документів",
            "Жодних перешкод немає"
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
          "title": " Які програми збільшать кількість працевлаштованих до Вас внутрішньо переміщених осіб?  (оберіть  не більше 3)",
          "choices": [
            "Компенсаційні програми",
            "Фінансування навчання",
            "Підтримка не потрібна"
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
          "title": "Які перешкоди існують, на Ваш погляд, для працевлаштування  людей  віком 60+? (оберіть до 3 ключових перешкод)",
          "choices": [
            "Відсутність необхідної професійної кваліфікації",
            "Низькі можливості в опануванні сучасних технологій та інноваційних інструментів",
            "Відсутність мотивації до навчання",
            "Пересторога щодо низької мотивації до праці",
            "Ці люди не звертаються за роботою",
            "Жодних перешкод немає"
          ],
          "showOtherItem": true,
          "choicesEnableIf": "{troubleold} notcontains 'Жодних перешкод немає' or {item} = 'Жодних перешкод немає'",
          "otherText": "Інше (вкажіть)",
          "colCount": 2,
          "maxSelectedChoices": 3,
          "minSelectedChoices": 1,
          "isRequired": true,        },
      ]
    },
    {
      "name": "page33",
      "elements": [
        {
          "type": "checkbox",
          "name": "profitold",
          "title": " Які програми збільшать кількість працевлаштованих до Вас людей віком 60+? (оберіть  не більше 3)",
          "choices": [
            "Фінансування навчання",
            "Компенсаційні виплати витрат на наставництво",
            "Впровадження гнучких умов праці",
            "Підтримка не потрібна"
          ],
          "showOtherItem": true,
          "otherText": "Інше (вкажіть)",
          "choicesEnableIf": "{profitold} notcontains 'Підтримка не потрібна' or {item} = 'Підтримка не потрібна'",
          "colCount": 2,
          "maxSelectedChoices": 3,
          "minSelectedChoices": 1,
          "isRequired": true      },
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
            "Подання вакансій Державній службі зайнятості",
            "Підбір фахівцями служби зайнятості кандидатів на вільні робочі місця",
            "Навчання працівників під потреби підприємства",
            "Участь у  компенсаційних програмах",
            "Участь працівників у семінарах (тренінгах)",
            "Консультації з питань законодавства про зайнятість",
            "Участь у грантових програмах"
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
            "Відсутня потреба",
            "Не знаємо, чим служба зайнятості може бути корисна",
            "Навчання працівників під потреби підприємства",
            "Співпраця потребує додаткового навантаження: звіти, паперові документи",
            "Відсутність відчутного результату співпраці",
            "Неякісний підбір кандидатів на вакансії",
            "Направлення невмотивованих безробітних  на вакансії"
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
          "type": "chekbox",
          "visibleIf": "{coloborationcpto} = true",
          "name": "coloborationttrue",
          "title": "У  чому полягає Ваша співпраця з Центрами професійно – технічної освіти Державної служби зайнятості?",
          "clearIfInvisible": "none",
          "choices": [
            "Дуальна форма навчання",
            "Прийом на роботу осіб, які закінчили навчання",
            "Участь у розробці освітніх або професійних стандартів",
            "Організація виробничої практики",
            "Участь у наглядових радах ЦПТО",
            "Підвищення кваліфікації працівників підприємства",
            "Підвищення кваліфікації викладачів та майстрів виробничого навчання  ЦПТО на підприємстві"
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
          "type": "dropdown",
          "name": "bestdcz",
          "title": "Які напрямки діяльності Державної служби зайнятості організовано найкраще?",
          "clearIfInvisible": "none",
          "isRequired": true,
          "choices": [

            {
              "value": "1",
              "text": "Подання вакансій Державній службі зайнятості"
            },
            {
              "value": "2",
              "text": "Підбір фахівцями служби зайнятості кандидатів на вільні робочі місця"
            },
            {
              "value": "3",
              "text": "Навчання працівників під потреби підприємства"
            },
            {
              "value": "4",
              "text": "Участь у  компенсаційних програмах"
            },
            {
              "value": "5",
              "text": "Участь працівників у семінарах (тренінгах)"
            },
            {
              "value": "6",
              "text": "Консультації з питань законодавства про зайнятість"
            },
            {
              "value": "7",
              "text":  "Участь у грантових програмах"
            },

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
              "value": "1",
              "text": "Подання вакансій Державній службі зайнятості"
            },
            {
              "value": "2",
              "text": "Підбір фахівцями служби зайнятості кандидатів на вільні робочі місця"
            },
            {
              "value": "3",
              "text": "Навчання працівників під потреби підприємства"
            },
            {
              "value": "4",
              "text": "Участь у  компенсаційних програмах"
            },
            {
              "value": "5",
              "text": "Участь працівників у семінарах (тренінгах)"
            },
            {
              "value": "6",
              "text": "Консультації з питань законодавства про зайнятість"
            },
            {
              "value": "7",
              "text":  "Участь у грантових програмах"
            },

          ],
        },
      ]
    },
    {
      "name": "page44",
      "elements": [
        {
          "type": "tagbox",
          "name": "faqdcz",
          "title": "З яких питань Ви б хотіли отримати додаткову інформацію?",
          "clearIfInvisible": "none",
          "choices": [
            "Подання вакансій Державній службі зайнятості",
            "Підбір фахівцями служби зайнятості кандидатів на вільні робочі місця",
            "Навчання працівників під потреби підприємства",
            "Участь у компенсаційних програмах",
            "Участь працівників у семінарах (тренінгах)",
            "Консультації з питань законодавства про зайнятість",
            "Участь у грантових програмах",
            "Додаткова інформація непотрібна"
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
      "type": "panel",
      "visibleIf": "{faqdcz} notcontains 'Додаткова інформація непотрібна'",
      "title": "Будь ласка, надайте Ваші контактні дані, щоб ми могли зв’язатися з Вами та якомога швидше вирішити зазначені питання",
      "titleLocation": "top",
      "elements": [
        {
          "type": "text",
          "title": "Email",
          "visibleIf": "{faqdcz} notcontains 'Додаткова інформація непотрібна'",
          "name": "contactemail",
          "width": "65%",
          "minWidth": "256px",
          "inputType": "email",
          "placeholder": "Email"
        },
        {
          "type": "text",
          "visibleIf": "{faqdcz} notcontains 'Додаткова інформація непотрібна'",
          "title": "Телефон",
          "name": "contacthone",
          "width": "35%",
          "minWidth": "208px",
          "startWithNewLine": false,
          "placeholder": "Телефон"
        }
      ]
    }

  ]
}
