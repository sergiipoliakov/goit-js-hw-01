// Задание 5.

// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// Решение.

// 1. Обьявить переменные.
const china = 'Китай';
const chily = 'Чили';
const australy = 'Австралия';
const indiay = 'Индия';
const yamayka = 'Ямайка';
let countryName
let message;
let country
// 2. поросить пользователя вести страну 
countryName = prompt('введите имя страны');
// 3. привести к верхнему и нижнему регистру
if (countryName === null) {
    message = 'Отменено пользователем';
  } else {
    country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  
// 4. сравниваем 
switch(country) {
    case china:
        message = `Доставка в ${country} будет стоить 100 кредитов`;
        break;

    case chily:
        message = `Доставка в ${country} будет стоить 250 кредитов`;
        break;

    case australy:
        message = `Доставка в ${country} будет стоить 170 кредитов`;
        break;

    case indiay:
        message = `Доставка в ${country} будет стоить 80 кредитов`;
        break;

    case yamayka:
        message = `Доставка в ${country} будет стоить 120 кредитов`;
        break;
// 4. если пользователь ввел неправельную страну        сообщить ему об этом
    default:
        alert('В вашей стране доставка не доступна')
}
}
console.log(message);



// Автопроверка домашних заданий по JavaScript

// Задача 5 / 5

// const countryName = 'КитаЙ';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//   console.log(country);
//   console.log(countryName); 
//   switch (country) {
  
//     case CHINA:
//       price = 100;
//       console.log(message);
//       break;

//     case AUSTRALIA:
//       price = 170;
//       break;
    
//     case INDIA:
//       price = 80;
//       break;
      
//     case JAMAICA:
//       price = 120;
//       break; 

//       default:
//         message = NO_DELIVERY;
//   }
// }
// if (price > 0) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// } 
// console.log(message);

