// Задание 3

// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// Решение!

// // 1. обьявить переменные.
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
// 2. Запрасить пороль через prompt и присвоить переменной userPassword.
const userPassword = prompt('введите пороль!');
// 3. Сравнить введеный результат .
if(userPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else if (userPassword === null) {
    message = 'Отмененно пользователем!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
// 4. Выводим в консоль.
console.log(message);



// Автопроверка домашних заданий по JavaScript
// Задача 3 / 5



// const ADMIN_PASSWORD = 'jqueryismyjam';
// // const userPassword = 'jqueryismyjam';
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message; 

// const userPassword = prompt('введите пороль!');

// if(userPassword === ADMIN_PASSWORD) {
//     message = ACCESS_IS_ALLOWED;
//   } else if (userPassword === null) {
//     message = CANCELED_BY_USER;
//   } else {
//     message = ACCESS_DENIED;
//   }
//    console.log(message);
  