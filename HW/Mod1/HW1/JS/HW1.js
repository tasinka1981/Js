"use strict";

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";
let wrong = "Отменено пользователем!";
let wrongLog = "Доступ запрещен, неверный логин!";
let wrongPw = "Доступ запрещен, неверный пароль!";
let welcome = "Добро пожаловать!";

const login = prompt("Введите логин");

if (login === adminLogin) {
    const password = prompt ('Введите пароль');
    if (password === null) {
        alert (wrong);
    } else if (password === adminPassword) {
        alert (welcome);
    } else {
        alert (wrongPw);
    }
} else if (login === null) {
    alert (wrong);
} else {
    alert (wrongLog);
}


// вариант 2

// switch (login) {
//   case null:
//     alert(wrong);
//     break;
//   case adminLogin:
//     const password = prompt("Введите пароль");
//     switch (password) {
//       case null:
//         alert(wrong);
//         break;
//       case adminPassword:
//         alert(welcome);
//         break;
//       default:
//         alert(wrongPw);
//     }
//     break;
//     default:
//     alert (wrongLog);
// }
