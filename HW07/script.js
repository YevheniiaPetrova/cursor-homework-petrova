const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


/* Task 1 - Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
Функція повинна викликатись через call та працювати з даними через this */

const getMyTaxes = function(salary) {
    return +(this.tax * salary).toFixed(2);
}
console.log(`Податок від зп 2750 у Литві: ${getMyTaxes.call(litva, 2750)}`);


/* Task 2 - Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. 
(tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this */

const getMiddleTaxes = function() {
    return +(this.tax * this.middleSalary).toFixed(2);
}
console.log(`Середній податок в Україні: ${getMiddleTaxes.call(ukraine)}`);


/* Task 3 Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. 
(tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this */

const getTotalTaxes = function() {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
console.log(`Всього платять податків у Латвії: ${ getTotalTaxes.call(latvia) }`);


/* Task 4 - Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes; */

const getMySalary = function () {
    const salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    const taxes = +(salary * this.tax).toFixed(2);
    const profit = +(salary - taxes).toFixed(2);
    return {
        salary,
        taxes,
        profit
    };
}

const intervalId = setInterval(() => console.log(getMySalary.call(latvia)), 10000);
console.log(`To stop showing result of Task 4 use clearInterval(intervalId).`)