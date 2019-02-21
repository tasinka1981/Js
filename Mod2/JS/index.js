"use strict";
// 1.
// const clients = ["Mango", "Poly", "Ajax"];
// console.log( clients[0] ); // Mango
// console.log( clients[1] ); // Poly
// console.log( clients[2] ); // Ajax

// clients[3] = 'Alex';
// console.log( clients[3] );
// clients.length = 2;
// console.log( clients.length);
// console.log( clients);

// 2.
// const message = "Welcome!to!Bahamas!";
// console.log(message.split("!"));

// 3.
// const clients = ["Mango", "Poly", "Ajax"];
// console.log( clients.join(" ")); // "Mango Poly Ajax"
// console.log( clients.join("*")); // "Mango,Poly,Ajax"
// console.log( clients.join("-")); // "Mango-Poly-Ajax"

// 4.
// const clients = ["Mango", "Ajax", "Poly", "Chelsey"];

// console.log( clients.indexOf('Poly') ); // 2
// console.log( clients.indexOf('Monkong') ); // -1

// const item = ['nata', 'olya', 'katya'];
// console.log(item.indexOf('nata'));
// console.log(item.indexOf('n'));
// console.log(item.includes('nata'));
// console.log(item.includes('kjhkj'));

// 5.
// const massive = [];
// massive.push(35);
// massive.push(99);
// massive.push(58);
// massive.unshift(11);
// massive.pop ();
// massive.shift();
// console.log(massive);

// // 6.
// const item = ['nata', 'olya', 'katya'];
// item.push('rada');
// console.log(item);
// let newItem = ( item.slice(1, 3) );
// console.log(newItem);
// console.log(item);

// 7. удаление элементов, замена элементов
// const item = ['nata', 'olya', 'katya'];
// item.push('rada');
// item.push('lida');
// console.log(item);
// item.splice(1, 3);
// console.log(item);
// item.splice(1, 0, 'sasha')
// console.log(item);
// item.splice(2, 1, 'anya','rita');
// console.log(item);
// item.splice(1,1,'roma');
// console.log(item);

// 8. ссоединение элементов
// const item = ['nata', 'olya', 'katya', 'rada', 'lida'];
// const newItem = ['roma', 'yulya'];
// const mass = item.concat(newItem);
// console.log('mass', mass);

// 9.

// const item = ['nata', 'olya', 'katya', 'rada', 'lida'];
// const newItem = ['roma', 'yulya'];
// const mass = item.concat(newItem);
// console.log('mass', mass);
// console.log( Array.isArray(mass) );
// console.log(mass.reverse());

// Доп задания

// 1.
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// console.log(users.length);
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);

// 2.
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// users.shift();
// console.log(users);

// users.unshift('Alex');
// console.log(users);

// users.unshift('Rodion', 'Vetal');
// console.log(users);

// 3;
/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string = 'Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr';

// let arr;

// arr = string.split(' ');
// console.log(arr);
// Вывести в консоли общую длину массива arr

// console.log(arr.length);

// Используя цикл, вывести в консоль все индексы массива arr

// for (let i=0; i < arr.length; i += 1) {
// console.log(i);
// }
// Используя цикл, вывести в консоль все элементы массива arr
// console.log();
// let i;
// for (let i=0; i < arr.length; i += 1) {
// console.log(arr[i]);
// }
// Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (const element of arr) {
//     console.log(arr.indexOf(element) + ':' +element)
// }

// Задание 4
/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/

// let num = 100;
// let input;
// do {
//     input = Number(prompt ('ввести число больше 100'))
// }
// while (input < num);

// Задание 5
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// for (let i = min; i < max; i += 1) {
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Задание 6
/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (const index of numbers) {
//     if(index > num) {
//         newArray.push(index);
//     }
// }
// console.log(newArray);

// Задача 7
/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// let longestWord;

// const newArry = string.split (' ');

// longestWord = newArry[0];
// for(const value of newArry) {
//     if (value.length > longestWord.length) {
//         longestWord = value;
//     }
// }

// console.log(longestWord); // 'force'

// Задача 8
/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// let arr = [];
// let ask;
// let sum =0;
// do{
//     ask = Number(prompt('Enter number'))
//     if (ask !==0) {
//     arr.push(ask);
// }
//     console.log(ask);
//     console.log(arr);
// }while(ask);

// if(arr.length !==0) {
// for (const iteration of arr) {
//     sum += iteration;
// }
// }
// console.log('The sum is: ' +sum);

//=======================================================================================

// let num = 0;
// const users = ['Alex', 'Nikolay', 'Helen'];
// while ( num < users.length){
//    if ( users[num] === 'Sveta'){
//      console.log(users)
//       console.log('Sveta найден');
//    break;
//    }
// }
// if (num === (users.length-1)) {
//   console.log('Юзер не найден');
// }
// num += 1

// let num = 0;
// const users = ['Alerx', 'nikola', 'lena', 'helen', 'katya'];

// do {
//   if(users[num === 'helen']) continue

//   console.log('hello:', users[num]);
//   num += 1;
// } while (num >= users.length);

/*10
  ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41];
// const min = numbers[0];
// const max = numbers[4];
// const answer = Number(prompt(`Введите цифру между ${min} и ${max}`));
// if (Number.isNaN(answer)) {
//   alert("это не число");
// } else {
//   if (numbers.includes(answer)) {
//     alert("Congrats!");
//   } else {
//     alert("Сожалеем, Вы не угадали!");
//   }
// }

//=====================================

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Напишите скрипт имитирующий авторизацию пользователя.
  
  Есть массив паролей зарегистрированных пользователей passwords. 
  
  При посещении страницы, необходимо попросить пользователя ввести свой пароль,
  после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
  Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
  Подсказка: используйте цикл do...while.
  Если был введен пароль который есть в массиве passwords, вывести alert 
  с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
  Если был введен не существующий пароль, отнять от лимита попыток единицу, 
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
  где n это оставшийся лимит. 
  
  После того как пользователь закрыл alert, запросить пароль снова. 
  Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
  существующий пароль, не кончатся попытки или пока пользователь 
  не нажмет Cancel в prompt.
  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  
  Если пользователь нажмет Cancel, прекратить выполнение цикла.
*/

// const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
// let attempts = 3;
// let inputPassword;

// do {
//   inputPassword = prompt("Enter your password");

//   if (passwords.includes(inputPassword)) {
//     alert("Добро пожаловать!");
//     break;
//   } else if (inputPassword !== null) {
//     attempts -= 1;
//     if (attempts > 0) {
//       alert(`неверный пароль, у вас осталось ${attempts} попыток`);
//     } else {
//       alert("у вас закончились попытки - аккаунт заблокирован");
//     }
//   }
// } while (attempts > 0 && inputPassword !== null);


