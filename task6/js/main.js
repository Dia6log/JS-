'use strict';
let start = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('invaluecome-')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    
    expenseItem = document.getElementsByClassName('expense-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    chooseIncome = document.querySelector('.choose-income'),
    checksavings = document.querySelector('.checksavings'),
    sum = document.querySelector('.choose-sum'),
    present = document.querySelector('.choose-persent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    let money, time;

    function letStart() {
        money = +prompt("Ваш бюджет на месяц", "");
        while ( isNaN(money) || money == null || money == "" )  {
            money = +prompt("Ваш бюджет на месяц", "");
        }
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
    }
    
    letStart();
      
    let appData = {
        budget: money,
        timeDate: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: true,
        getExpenses: function() {
            for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt("Во сколько обойдется?'", "");
                if ( (typeof(a) === "string") && typeof(a) != null && b != null &&
                     a != '' && b != '' && a.length < 80) {
                        appData.expenses[a] = b;
                        console.log('done');
                    } else {
                        alert('Введенные данные не верны, попробуйте еще раз');
                        console.log('error');
                        --i;
                    }
            } 
        },
        detectDayBudget: function() {
            appData.budgetPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.budgetPerDay);
        },
        detectLevel: function() {
            if (appData.budgetPerDay < 100) {
                console.log('Минимальный уровень достатка');
             } else if (appData.budgetPerDay >= 100 && (appData.budgetPerDay < 2000)) {
               console.log('Средний уровень достатка');
             } else if (appData.budgetPerDay >= 2000) {
               console.log('Хороший уровень достатка');
             } else {
                 console.log('Что-то пошло не так');
             }
        },
        chekSaving: function() {
            if (appData.saving) {
                let saving = +prompt("Каков размер ваших сбережений?", ""),
                    precent = +prompt("Под какой процент?", "");
                appData.monthIncome = (saving/12/100*precent).toFixed(2);
                alert("Доход от процентов в месяц: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function() {
            for (let i = 1; i < 4; i++) {
                appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
            }
        },
        shooseIncom: function() {
            let answ = prompt("Введите источник ополнительного дохода (через запятую)", "");
            while ((typeof(answ) != 'string') || (answ == "")) {
                answ = prompt("Ошибка ввода данных. Введите источник ополнительного дохода (через запятую)", "");
            }
            appData.income = answ.split(', ');
            
            let addansw = prompt("Может что-то еще", '');
            while ((typeof(addansw) != 'string') || (addansw == '')) {
                addansw = prompt("Ошибка ввода данных. Может что-то еще", "");
            }
            appData.income.push(addansw);
            appData.income.sort();
            appData.income.forEach(function(item, i) {
                alert("Способы доп заработка: " + (i+1) + ") " + item);
            });
        }
        
    };
    
    appData.shooseIncom();
    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + appData[key], "");
    }
    console.log(appData);