// Задание 4
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// Решение.
// 1. обьявить переменнные.
const credits = 23580;
const pricePerDroid = 3000;
let message;
// 2. спросить пользователя через prompt сколько он хочет купить дройдов.
const orderPieces = prompt('Сколько дроидов Вы хотите купить?'); 
// 3. Узнать цену за количество дройдов
const totalPrice = pricePerDroid * orderPieces;
// console.log(totalPrice);
// 4.  Сравнить введеный результат.
if(orderPieces === null) {
    message = 'Отменено пользователем ';
    // console.log(message);
}
else if(totalPrice  <= credits) {
     message = `Вы купили ${orderPieces} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
    // console.log(message);
} else if(credits  < totalPrice) {
    message = 'Недостаточно средств на счету!';
    // console.log(message)
} 
// 5. Выводим в консоль.
 console.log(message);


//  Автопроверка домашних заданий по JavaScript
//  Задача 4 / 5
//  Модуль 1: 
 
//  const orderPieces = 4;

//  const credits = 23580;
//  const pricePerDroid = 3000;
//  const CANCELED_BY_USER = 'Отменено пользователем!';
//  const ACCESS_DENIED = 'Недостаточно средств на счету!';
 
//  let totalPrice; 
//  let balanceCredit; 
//  let message;
 
// let totalPrice = orderPieces * pricePerDroid; 
// let balanceCredit = credits - totalPrice; 
// let message;

// if(orderPieces === null) {
//   message = CANCELED_BY_USER;
// }
// else if(credits >= totalPrice) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else if(credits < totalPrice) {
//   message = ACCESS_DENIED;
// } else if(orderPieces === null) {
//   message = CANCELED_BY_USER;
// }
//  console.log(message);
