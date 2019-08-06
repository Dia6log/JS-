'use strict';

let money = +prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
  
let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};


/*for (let i = 0; i < 2; i++) {
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
} */ 

let x = 0;
/*while (x < 2) {
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

do {
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
} while (x < 2);

 
appData.budgetPerDay = appData.budget / 30;

  if (appData.budgetPerDay < 100) {
     console.log('Минимальный уровень достатка');
  } else if (appData.budgetPerDay >= 100 && (appData.budgetPerDay < 2000)) {
    console.log('Средний уровень достатка');
  } else if (appData.budgetPerDay >= 2000) {
    console.log('Хороший уровень достатка');
  } else {
      console.log('Что-то пошло не так');
  }


alert('Ежедневный бюджет: ' + appData.budgetPerDay);

console.log(appData);