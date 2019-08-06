'use strict';
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expenseItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    chooseIncome = document.querySelector('.choose-income'),
    checksavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    btnDisable = document.querySelectorAll('button');


let money, time, trueTime;

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,  
    };


for (let i=0; i < btnDisable.length - 1; i++) {
    btnDisable[i].setAttribute('disabled', 'true');
}


startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while ((time == null) || (time == '')) {
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
    }
    trueTime = time.split('-');
       
    while ((+trueTime[0] < 1970) || (+trueTime[0] >= 2050) || isNaN(+trueTime[0]) ||
           (+trueTime[1] < 1) || (+trueTime[1] > 12) || isNaN(+trueTime[1]) ||
           (+trueTime[2] < 1) || (+trueTime[2] > 31) || isNaN(+trueTime[2])) {
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        trueTime = time.split('-');
    } 

    trueTime.length = 3;
    time = trueTime.join('-');

    money = +prompt("Ваш бюджет на месяц", "");
    while ( isNaN(money) || (money == 0)) {
        money = +prompt("Ваш бюджет на месяц", "");
    }
    appData.budget = money;
    appData.timeDate = time;
    budgetValue.textContent = '' + appData.budget.toFixed();
    yearValue.value = new Date(Date.parse(appData.timeDate)).getFullYear();
    monthValue.value = new Date(Date.parse(appData.timeDate)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(appData.timeDate)).getDate();

    for (let i=0; i < btnDisable.length - 1; i++) {
        btnDisable[i].removeAttribute('disabled');
    }
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expenseItem.length; i++) {
        let a = expenseItem[i].value,
            b = expenseItem[++i].value;
        if ((typeof (a) === "string") && b != null && a != '' && !(isNaN(b)) && b != '') {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            alert('Введенные данные не верны, попробуйте еще раз');
            expenseItem[i].value = 0;
            break;
        }
    }
    expensesValue.textContent = sum;
});


optionalexpensesBtn.addEventListener('click', function () {
    optionalexpensesItem.forEach(function (item, i) {
        appData.optionalExpenses[i] = item.value;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ', ';
    });
});

countBtn.addEventListener('click', function(){
    if (appData.budget == undefined) {
        daybudgetValue.textContent = 'Вы не ввели дневной бюджет';
    } else {
        appData.budgetPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed(1);
        daybudgetValue.textContent = appData.budgetPerDay;
        if (appData.budgetPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.budgetPerDay >= 100 && (appData.budgetPerDay < 2000)) {
            levelValue.textContent ='Средний уровень достатка';
        } else if (appData.budgetPerDay >= 2000) {
            levelValue.textContent ='Хороший уровень достатка';
        } else {
            levelValue.textContent ='Что-то пошло не так';
        }
    }
});

chooseIncome.addEventListener('input', function(){
    appData.income = chooseIncome.value.split(',');
    incomeValue.textContent = appData.income;
});

checksavings.addEventListener('click', function(){
    if (appData.saving) {
        appData.saving = false;
    } else {
        appData.saving = true;
        }
    });

 function calcSavings() {
    if (appData.saving) {
        appData.monthIncome = +chooseSum.value / 12 / 100 * +choosePercent.value;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        appData.yearIncome = +chooseSum.value / 100 * +choosePercent.value;
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);  
        }
    }

chooseSum.addEventListener('input', calcSavings);
choosePercent.addEventListener('input', calcSavings);

