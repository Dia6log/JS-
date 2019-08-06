'use strict';

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
    saving: true
};

function getExpenses() {
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?'", "");
    if ( (typeof(a) === "string") && typeof(a) != null && b != null 
        && a != '' && b != '' && a.length < 80) {
            appData.expenses[a] = b;
            console.log('done');
        } else {
            alert('Введенные данные не верны, попробуйте еще раз');
            console.log('error');
            --i;
        }
} 
}

getExpenses();

/*let x = 0;
while (x < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?'", "");
    if ( (typeof(a)) === "string" && b != null 
        && a != '' && b != '' && a.length < 80) {
            appData.expenses[a] = b;
            console.log('done');
            x++;
        } else {
            alert('Введенные данные не верны, попробуйте еще раз');
            console.log('error');
        }
}*/

/*do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?'", "");
    if ( (typeof(a)) === "string" && b != null 
        && a != '' && b != '' && a.length < 80) {
            appData.expenses[a] = b;
            console.log('done');
            x++;
        } else {
            alert('Введенные данные не верны, попробуйте еще раз');
            console.log('error');
        }
} while (x < 2);*/

function detectDayBudget() {
  appData.budgetPerDay = (appData.budget / 30).toFixed();
  alert('Ежедневный бюджет: ' + appData.budgetPerDay);
}

detectDayBudget();

function detectLevel() {
if (appData.budgetPerDay < 100) {
    console.log('Минимальный уровень достатка');
 } else if (appData.budgetPerDay >= 100 && (appData.budgetPerDay < 2000)) {
   console.log('Средний уровень достатка');
 } else if (appData.budgetPerDay >= 2000) {
   console.log('Хороший уровень достатка');
 } else {
     console.log('Что-то пошло не так');
 }
}

detectLevel();

function chekSaving() {
    if (appData.saving) {
        let saving = +prompt("Каков размер ваших сбережений?", ""),
            precent = +prompt("Под какой процент?", "");
        appData.monthIncome = (saving/12/100*precent).toFixed(2);
        alert("Доход от процентов в месяц: " + appData.monthIncome);
    }
}

chekSaving();


function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
    }
}

chooseOptExpenses();

console.log(appData);