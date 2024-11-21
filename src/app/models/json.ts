export const json= {
  "locale": "ua",

  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "dropdown",
          "name": "region",
          "title": {
            "ua": "Вкажіть регіон де ви зареєстровані  ( в якому ви знаходитесь та провадите діяльність)?"
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
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "name": "namepou",
          "title": {
            "ua": "Вкажіть назву Вашого підприємства  (ПІБ для ФОП)"
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
          "type": "text",
          "name": "edrpou",
          "title": {
            "ua": "Вкажіть ЄДРПОУ Вашого підприємства (РНОКПП для ФОП)"
          },
          "isRequired": true,
          "placeholder": {
            "ua": "Напишіть..."

          }

        },
      ]
    },
    {
      "name": "page4",
      "elements": [
        {
          "type": "text",
          "name": "qved",
          "title": {
            "ua": "Вкажіть основний вид діяльності Вашого підприємства згідно КВЕД   "
          },
          "isRequired": true,
          "placeholder": {
            "ua": "Напишіть..."

          }

        },
      ]
    },
    {
      "name": "page5",
      "elements": [
        {
          "type": "text",
          "name": "staff010124",
          "title": {
            "ua": "Вкажіть середньоспискову чисельність персоналу станом на 01.01.2024"
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
      "name": "page6",
      "elements": [
        {
          "type": "text",
          "name": "staff010125",
          "title": {
            "ua": "Вкажіть, яка планується,приблизно, середньоспискова чисельність персоналу станом на 01.01.2025"
          },
          "isRequired": true,
          "placeholder": {
            "ua": "Напишіть..."

          }

        },
      ]
    },
    {
      "name": "page7",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "staffquality",
          "title": "Вкажіть кількість або відсоток, перелічених категорій працівників, які на даний час працюють на підприємстві?  Якщо Ви не володієте точною інформацією по можливості проконсультуйтесь із колегами або поставте орієнтовну цифру)",
          "clearIfInvisible": "none",
          "columns": [
            {
              "name": "Column 1",
              "title": "Кількість",
              "cellType": "text",
              "validators": [
                {
                  "type": "expression"
                }
              ],
              "inputType": "number"
            }
          ],
          "cellType": "text",
          "rows": [
            {
              "value": "manager",
              "text": "Керівники/менеджери"
            },
            {
              "value": "prof",
              "text": "Професіонали та Спеціалісти"
            },
            {
              "value": "prof1",
              "text": "Службовці та адміністративні працівники"
            },
            {
              "value": "qwalwork",
              "text": "Кваліфіковані робітники"
            },
            {
              "value": "notqwalwork",
              "text": "Некваліфіковані робітники"
            },
            {
              "value": "woman",
              "text": "Жінки"
            },
            {
              "value": "teengere",
              "text": "Молодь у віці до 25 років"
            },
            {
              "value": "vpo",
              "text": "Внутрішньо переміщені особи"
            },
            {
              "value": "inv",
              "text": "Особи з інвалідністю"
            },
            {
              "value": "veteran",
              "text": "Ветерани ООС та війни з рф"
            }
          ]
        },
        ]
    },
    {
      "name": "page8",
      "elements": [
        {
          "type": "text",
          "name": "staffout24",
          "title": {
            "ua": "Вкажіть чисельність звільнених у 2024 році працівників з Вашого підприємства"
          },
          "isRequired": true,
          "placeholder": {
            "ua": "Напишіть..."

          }

        },
      ]
    },

    {
      "name": "page8",
      "elements": [
        {
          "type": "dropdown",
          "name": "workregim",
          "title": {
            "ua": " Який формат роботи впроваджений на підприємстві?"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": {
                "ua": "Робота в офісі"
              }
            },
            {
              "value": "2",
              "text": {
                "ua": "Віддалена робота"
              }
            },
            {
              "value": "3",
              "text": {
                "ua": "Змішаний формат роботи"
              }
            }

          ]
        },
      ]
    },
    {
      "name": "page9",
      "elements": [
        {
          "type": "dropdown",
          "name": "valuetrade24",
          "title": "Як змінилися обсяги виробництва/ продажів / виконаних робіт або наданих послуг Вашим підприємством протягом 2024?",
          "clearIfInvisible": "none",
          "choices": [
            {
              "value": "1",
              "text": "Істотно зросли"
            },
            {
              "value": "2",
              "text": "Помірно зросли"
            },
            {
              "value": "3",
              "text": "Не змінилися"
            },
            {
              "value": "4",
              "text": "Помірно знизились"
            },
            {
              "value": "5",
              "text": "Істотно знизились"
            }
      ]
    },
  ]
        },
    {
      "name": "page10",
      "elements": [
        {
          "type": "dropdown",
          "name": "qvaluetrade25",
          "title": "Якими на Вашу думку будуть обсяги виробництва/ продажів / виконаних робіт або наданих послуг Вашим підприємством у 2025?",
          "choices": [
            {
              "value": "1",
              "text": "Істотно зростуть"
            },
            {
              "value": "2",
              "text": "Помірно зростуть"
            },
            {
              "value": "3",
              "text": "Не зміняться"
            },
            {
              "value": "4",
              "text": "Помірно знизяться"
            },
            {
              "value": "5",
              "text": "Істотно знизяться"
            }
          ]

    },
  ]
        },
    {
      "name": "page11",
      "elements": [
        {
          "type": "boolean",
          "name": "staffin24",
          "title": "Чи наймало Ваша підприємство постійних штатних працівників протягом 2024 року?",
          "labelTrue": "Так",
          "labelFalse": "Ні",
          "swapOrder": true
        },
  ]
        },
    {
      "name": "page12",
      "elements": [
        {
          "type": "matrixdropdown",
          "visibleIf": "{staffin24} = true",
          "name": "staffqualityin24",
          "title": "Вкажіть кількість, перелічених категорій працівників, які , були прийняті на підприємство протягом 2024?  Якщо Ви не володієте точною інформацією по можливості проконсультуйтесь із колегами або поставте орієнтовну цифру)",
          "clearIfInvisible": "none",
          "columns": [
            {
              "name": "Column 1",
              "title": "Кількість",
              "cellType": "text",
              "validators": [
                {
                  "type": "expression"
                }
              ],
              "inputType": "number"
            }

          ],
          "cellType": "text",
          "rows": [
            {
              "value": "woman",
              "text": "Жінки"
            },
            {
              "value": "teengere",
              "text": "Молодь у віці до 25 років"
            },
            {
              "value": "vpo",
              "text": "Внутрішньо переміщені особи"
            },
            {
              "value": "inv",
              "text": "Особи з інвалідністю"
            },
            {
              "value": "veteran",
              "text": "Ветерани ООС та війни з рф"
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
          "name": "outstaff24",
          "title": "Чи скорочувало Ваше підприємство штатних працівників протягом 2024 року?",
          "labelTrue": "Так",
          "labelFalse": "Ні",
          "swapOrder": true
        },
      ]
    },
    {
      "name": "page14",
      "elements": [
        {
          "type": "matrixdropdown",
          "visibleIf": "{outstaff24} = true",
          "name": "staffqualityin24",
          "title": "Вкажіть кількість перелічених категорій працівників, які , були скорочені протягом 2024 року?  Якщо Ви не володієте точною інформацією по можливості проконсультуйтесь із колегами або поставте орієнтовну цифру)",
          "clearIfInvisible": "none",
          "columns": [
            {
              "name": "Column 1",
              "title": "Кількість",
              "cellType": "text",
              "validators": [
                {
                  "type": "expression"
                }
              ],
              "inputType": "number"
            }

          ],
          "cellType": "text",
          "rows": [
            {
              "value": "woman",
              "text": "Жінки"
            },
            {
              "value": "teengere",
              "text": "Молодь у віці до 25 років"
            },
            {
              "value": "vpo",
              "text": "Внутрішньо переміщені особи"
            },
            {
              "value": "inv",
              "text": "Особи з інвалідністю"
            },
            {
              "value": "veteran",
              "text": "Ветерани ООС та війни з рф"
            }
          ]
        },
      ]
    },

  ]
}
