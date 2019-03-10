"use strict";

//   const showTestDays = function(name = "Пользователь", days = 30) {
//     return `Имя - ${name}, использовано ${days} тестовых дня(ей)`;
//   }

//   console.log( showTestDays("Екатерина", 10) );
// "Имя - Екатерина, использовано 10 тестовых дня(ей)"

//   console.log( showTestDays("Михаил") );
// "Имя - Михаил, использовано 30 тестовых дня(ей)"

//   console.log( showTestDays() );
// "Имя - Пользователь, использовано 30 тестовых дня(ей)"

//=======================

//   const arr = ['hello', 'my', 'name', 'is', 'kolya'];
//   console.log(toText(arr));

//   function toText (data) {
//       const newText = data.join(' ');
//       return newText;
//   }
//===================================================================

// const summ = function() {
//   const max = arguments.length;
//   let total = 0;

//   for (let i = 0; i < max; i += 1) {
//     total += arguments[i];
//   }

//   return total;
// };

// console.log(`sum = ${summ(1, 2, 3, 4, 5)}`); // "sum = 15"

//=====================================

// let value = 10;

// const fn = function () {
//   let value = 20;
//   console.log(value + 10);
// };

// fn(); // 30

//==========

// let value = 10;

// const fn = function () {

//   console.log(value + 10);
// };

// fn(); // 20

//=========

// const fn = function (value) {
//   console.log(value + 10);
// };
// fn(50); //60

//=========

// let a = 10;

// const fn = function (value) {
//   console.log('loaded');  // проверяем или функция вызвалась
//   const ifValue = Number(value) || a;
//   console.log('ifValue', ifValue); // проверяем что на выходе в константе ifValue

//   if(!Number.isNaN(ifValue)) {
//     console.log('firstIF'); // проверяем или выполняется первое условие
//     console.log(ifValue + 10);
//   } else {
//     console.log('secondIF'); // проверяем или выполняется второе условие
//     console.log('value is NaN');
//   }
// };

// fn();

//=================================

// const printMessage = function (callback) {
//   const message = callback();
//   console.log( message );
// };

// const getMessage = function () {
//   return "Welcome to the jungle!";
// }

// printMessage(getMessage); // "Welcome to the jungle!"

//=======

// const a = function (b) {

// }

//==============
// Задача 1
/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

//используем if else

// const checkNumberType = function(num) {
//   const even = num % 2 === 0;
//   if (even === true) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// }

// console.log (checkNumberType(0));
// console.log (checkNumberType(312586));
// console.log (checkNumberType(2));

//используем тернарный оператор

// const checkNumberType = function(num) {
//   const even = num % 2 === 0;
//   // const odd = num % 2 !==0;
//   return even ? 'even': 'odd';
// }

// console.log (checkNumberType(35));
// console.log (checkNumberType(312586));
// console.log (checkNumberType(ddff));

// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'

//================================
// Задача 2
/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// const formatString = function (str) {
//   if (str.length < 40) {
//     return str;
//   } else {
//     return (str.slice(0, 40) + '...');
//   }
// }

//доп проверки
// let formatString = function(str) {
//   if (str.length < 40) {
//     console.log("str if < 40", str);
//     return str;
//   } else {
//     let newStr = str.slice(0, 40) + "...";
//     console.log("str if > 40", newStr);
//     return newStr;
//   }
// };

// // Вызовы функции для проверки
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка

//==============
// задача 3
/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// const checkForSpam = function(str) {
//   if ( str.includes('span') || str.includes('sale')) {
//     return true;
//   } else {
//     return false;
//   }
//   return ( str.toLowerCase().includes('span') || str.toLowerCase().includes('span'))
// }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

//===========================

// const map = (arr, callback) => { // обьявляем функцию с аргументами arr(массивом), callback(функцией)
//   const resultArr = []; // обьявляем пустой массив, в который будет записывать новые эл-ты

//   // перебираем, входящий при вызове функции массив, записанный в аргумент arr.
//   // в теле цикла елементы пропускаем через функцию callback, обьявленную в аргументах
//   // и записываем результат callback-функции в переменную result.
//   // поседним этапом цикла - записываем result в новый массив, выходим из массива.
//   // последним этапом функции map будет возврат(return) переменной resultArr.
//   for(const element of arr) {
//     const result = callback(element);
//     resultArr.push(result);
//   }
//   return resultArr;
// };

// const double = val => val * 2;
// const triple = val => val * 3;
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = map(numbers, double);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const tripledNumbers = map(numbers, triple);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]

//=================
//  const ourArr = (transfer, mass) => {
//    let newMass = [];
//    for(const numb of mass) {
//      const newElement = transfer(numb);
//      newMass.push(newElement);
//    }
//    return newMass;
//  }

//  const numbers = [1, 2, 3, 4, 5];
//  const double = (number) => number *2
// //  const triple = (number) => number *3

//  const doubledNumbers = ourArr(double, numbers);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const tripledNumbers = ourArr(triple, numbers);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]

//====================================

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// const getPx = function(str) {
//   if (str !== Number.isNaN) {
//     return Number.parseFloat(str);
//     // console.log (Number.parseFloat(str))
//   } else {return null;
//   }
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null

//===============

// Задача 8
/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = (...arr) => {
//   const newArr = arr[0];
//   arr.shift();
//   const newArr2 = arr;

//   console.log(newArr);
//   console.log(newArr2);

//   for (const number of newArr2) {
//     if (newArr.includes(number)) {
//       newArr.splice(newArr.indexOf(number), 1);
//     }
//   }
//   console.log(newArr);
// };

// // Вызовы функции для проверки
// console.log(filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]

// console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]

//==============================

// Преобразование массива строк, который мы получили от пользователя в массив чис

// const transformArr = function(arr) {
//   const newArr = [];

//   for(const item of arr) {
//     newArr.push(Number(item))
//   }
//   return newArr;
//   console.log(newArr);
// }

// // const result = transformArr(['5', '9', '22', '4', '17']);
// // console.log(result);

// const enterNumber = function() {
//   const answer = prompt("введите числа через запятую");

//   if (answer === null) {
//     return;
//   }
//   const newAnswer = answer.split(",");

//   console.log(answer);
//   console.log(newAnswer);
//   const transformedArr = transformArr(newAnswer);
//   // console.log(transformedArr);
//   return transformedArr
// };

// const result = enterNumber();

// console.log(result);

//==============================

// Задача 6
/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
// const findLargestNumber = (numbers) => {
// // const arr  = [];
// let largestNum = numbers[0];
// for (const item of numbers) {
// if (item > largestNum) {
//  largestNum  = item;

// }
// }
// return largestNum;

// }

// // Вызовы функции для проверки
// console.log(
//   findLargestNumber([1, 2, 3])
// ); // вернет 3

// console.log(
//   findLargestNumber([27, 12, 18, 5])
// ); // вернет 27

// console.log(
//   findLargestNumber([31, 128, 14, 74])
// ); // вернет 128

//===============================================================================
// Домашка
/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins
 
  🔔 Разбейте задачу на подзадачи с помощью функций.
  
  Напишите функцию isLoginValid(login), в которой проверьте количество символов 
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
  в заданный диапазон от 4-х до 16-ти символов включительно.
 
  Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
  если такого логина еще нет и false если логин уже используется.
  Далее напишите функцию addLogin(allLogins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
     позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// // Напишите функцию isLoginValid(login), в которой проверьте количество символов
// //   параметра login и верните true или false в зависимости от того, попадает ли длина параметра
// //   в заданный диапазон от 4-х до 16-ти символов включительно.

// const isLoginValid = function(login) {
//   let min = 4;
//   let max = 16;
//   if (login.length >= min && login.length <= max) {
//     return true;
//   } else {
//     return false;
//   }
// };
// // console.log (isLoginValid ('Ajax'));

// // Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список
// //   всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true
// //   если такого логина еще нет и false если логин уже используется.

// const isLoginUnique = function(allLogins, login) {
//   let message;
//   for (const item of allLogins) {
//     if (login === item) {
//       message = false;
//       break;
//     } else {
//       message = true;
//     }
//   }
//   // console.log(message);
//   return message;
// };

// // console.log(isLoginUnique (logins, "Poly"));

// // Далее напишите функцию addLogin(allLogins, login) которая:
// //     - Принимает новый логин и массив всех логинов как параметры
// //     - Проверяет валидность логина используя вспомогательную функцию isLoginValid
// //     - Если логин не валиден, прекратить исполнение функции addLogin
// //       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// //     - Если логин валиден, функция addLogin проверяеть уникальность логина
// //       с помощью функции isLoginUnique
// //     - Если isLoginUnique вернет true, addLogin добавляет новый логин
// //        в logins и возвращает строку 'Логин успешно добавлен!'
// //     - Если isLoginUnique вернет false, тогда addLogin не добавляет
// //        логин в массив и возвращает строку 'Такой логин уже используется!'

// const addLogin = function(allLogins, login) {
//   let resultValid = isLoginValid(login);
//   if (resultValid === false) {
//     console.log("Ошибка! Логин должен быть от 4 до 16 символов");
//   } else if (isLoginUnique(allLogins, login) === true) {
//     console.log("Логин успешно добавлен!");
//     allLogins.push(login);
//     console.log(allLogins);
//   } else {
//     console.log("Такой логин уже используется!");
//   }
// };
// addLogin(logins, "Zod");

// // // Вызовы функции для проверки
// addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
// addLogin(logins,'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins,'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// // view rawjs-hw-module-03.js hosted with ❤ by GitHub

// Задание 7
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
//====================================================================

// ДОПЗАДАНИЯ!!!!!!!!!!!!!!!!
// Задача1
/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/
// function checkNumberType(num) {
//   if(num%2 !==0){
//     return ('Odd');
//   } else {return 'Even'};
// }

// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'

// Задача2
/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
// function formatString(str) {
//   const leng = str.length;
//   if (leng <= 40) {
//     return str;
//   } else {
//     return str.slice(0, 39) + "...";
//   }
// }

// // Вызовы функции для проверки
// console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien.")); // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// ); // вернется форматированная строка
//==============================================================

// Задача 3
/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// function checkForSpam(str) {
//   if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
//     return true;
//   } return false;
// }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true
//================================================================================
// Задача 4

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// function getPx(str) {
//   if(typeof str === 'string') {
// return parseFloat(str);
// console.log
//   } return null
// }
// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null

//==============================================================================
// Задача 5
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/

// function findLongestWord(str) {
//   let arr = str.split(" ");
//   let longWord = arr[0];

//   for (let item of arr) {
//     if (longWord.length < item.length) {
//       longWord = item;
//     }
//   }
//   return longWord;
// }

// // Вызовы функции для проверки
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'

// console.log(findLongestWord("Google do a roll")); // вернет 'Google'

// console.log(findLongestWord("May the force be with you")); // вернет 'force'


//===================================================================================
// Задача 6

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// function findLargestNumber(numbers) {
// let max = numbers[0];
// for(let item of numbers) {
//   if (item > max) {
//     max = item;
//   }
// }
// return max
// }

// // Вызовы функции для проверки
// console.log(
//   findLargestNumber([1, 2, 3])
// ); // вернет 3

// console.log(
//   findLargestNumber([27, 12, 18, 5])
// ); // вернет 27

// console.log(
//   findLargestNumber([31, 128, 14, 74])
// ); // вернет 128
//==========================================================================
// Задача 7
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];
// function addUniqueNumbers(...res) {
//   for (let item of res) {
//     if (!uniqueNumbers.includes(item)) {
//       uniqueNumbers.push(item);
//     } 
//   }
// return uniqueNumbers;
// }



// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

//============================================================================
/*Задача 8
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = function(arr, ...args) {
//   // console.log(arr);
//   // console.log(args);
//   let newArr = arr;
//   for (let index of args) {
//     if (newArr.includes(index)) {
//       let i = arr.indexOf(index);
//       newArr.splice(i,1);
//     }
//   }
//   return newArr;
// }; 

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]

