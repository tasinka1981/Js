"use strict";
//чутливий для регістру

// var year = 2018;
// let month = "November";
// const date = 27;
// let num = 10;
// let Number = 50;
// let numBer = 100;

// let summ = num * number + numBer;
// console.log('sum',summ);
// alert('sum',summ);
// const answer1 = confirm('Are you ready?${month}');
// const answer2 = prompt('How are you?');

// console.log('answer1', answer1);
// console.log('answer2', answer2);
// console.log(typeof number);
// console.log(typeof month);
// console.log(typeof month === typeof number);

// console.log(month.length);
// console.log(month.indexOf('N'));
// console.log(month.indexOf('n'));
// console.log(month.includes('Nov'));
// console.log(month.includes('nov'));

// const fontSize = '5.5px';
// const usersLenght = 20;

// console.log('преобразование в целое число', Number.parseInt(fontSize));
// console.log('преобразование в число с дробью', Number.parseFloat(fontSize));

// console.log('Проверка на число', Number.isNaN(Number(fontSize)));
// console.log('Проверка на число', Number.isNaN(usersLenght));

// const a = 5.6;
// const b = 4.5;

// console.log('a+b', a+b);
// console.log('a+b', (a+b).toFixed(10));

// const text = 'Преобразование в целое число';
// console.log('Преобразование к нижнему регистру', text.toLowerCase());
// console.log('Преобразование к верхнему регистру', text.toUpperCase());

// const name = 'John';
// const surname = 'Connor';
// const years = 40;
// const height = 180;

// console.log('Messege:',
// `Hello ${name} ${surname}. I'm ${years} and ${height + 2 + 'sm'}.`);

// const num = 20;
// const result = num < 30 && num > 10;
// console.log(result); // true 20

// const text = 'kjhkjhkjhk';
// const result = text.length < 30 && text.length > 5;
// console.log(result); // true

// пропускает или админа или модератора
// const obj = {
//     id: 'jhkjhkjhkj',
//     name: 'Alex',
//     role: 'admin',
// };
// const resultObj = obj.role === 'admin' || obj['role'] === 'moderator';
// console.log(resultObj);

// if(resultObj) {
//     const name = 'Bob';
// }

// if(resultObj) {
//     var varName = 'Bob';
// }
// console.log('name', name);
// //console.log (surname)

// console.log('varName', varName);

// //const surname = 'Dilsisi';

// const resultPrompt = prompt ('Введите значения');

// if (resultPrompt !== 'admin') {
//     alert("нет прав");
// } else {
//     alert("добро пожаловать");
// }

// let value = 0;
// value  +=50;
// value  +=50;
// value  -=30;
// console.log('value', value);

// Задача 1

// let guest;
// let name;
// name = "Mango";
// guest = name;
// console.log(guest);
// name = "ops";
// guest = name;
// console.log(guest);

// // Задача 2
// const day = 02;
// const month = 10;
// const year = 2017;
// const date = ' 0' + day +"" month
// console.log();

// const date = day + "//\/\" + month + "\/\\/\" + year;

// console.log(date); // 02\10\2017

// // Задача 3
// const name = prompt('Введите имя');
// alert (name);

// // Задача 4
// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const messege = `${name} прибывает на отдых ${date} в ${roomType}`;
// console.log(messege);// Mango прибывает на отдых 14/08/2031 в люкс.

// // Задача 5
// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// let totalWidth;
// totalWidth = Number.parseInt(padding) + Number.parseInt(border) + Number.parseInt(contentWidth) + 'px';
// console.log(totalWidth); // '125px'

// // Задача 6
/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/

// const year = prompt('Какой сейчас год?');
// if (year === "2019") {
//     alert ('Все верно!')
// }
// else {
//     alert ('На дворі 2019');
// }

// // Задача 7
/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/
// const value = prompt('Введите произвольное целое число');
// if (value === null)  {
//     alert ("Приходите еще!")
// }
// else  if (Number.isInteger(Number(value))) {
//     alert ("Спасибо!")
// }
// else {
//     alert ("Необходимо было ввести целое число!")
// }

// // Задача 8
/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/
// const num = Number.parseInt(Math.random() * 100);

// let type;

// switch (num%2) {
//     case 0:
//     type = 'even';
//     break;
//     default:
//     type = "odd"
//     break;
// }

// console.log(`${num} is ${type}`);

// // Задача 9
/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

// let hours = 7;
// let minutes = 3;
// let seconds = 42;

// const time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

// console.log('Time is: ', time);

// // Задача 10
/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// const promptValue = prompt ('Введите число от 1 до 5');
// if (Number.isInteger(+promptValue) && (promptValue > 0 && promptValue <=5)) {
//    switch (+promptValue) {
//       case 1 : alert ("Каталог хостелов")
//       break;
//       case 2 : alert ("Каталог бюджетных отелей")
//       break;
//       case 3 : alert ("Каталог отелей ***")
//       break;
//       case 4 : alert ("Каталог отелей ****")
//       break;
//       case 5 : alert ("Каталог лучших отелей")
//       break;

//    }

// }
// else if(promptValue === null) {
//    alert ('очень жаль, приходите еще!')}
//    else {alert ('Неверный ввод, возможные варианты 1-5!')}

//=========================================================================================

// Есть человек из 3-х человек.
// Дома в данный момент мама и Коленька.
// Спросить, кто пришел.ЕстьЕсли кто-то из семьи - пускаем.
// Если чужой - спрашиваем К кому пришел? - в ответ ввести "Пришел к Имя"
// если пришел к Отцу - сказать, что его нет Дома
// если к матери - добро пожаловать, но без сюрпризов

// используем  else/if

// const father = "igor";
// const mother = "Ira";
// const child = "Nikolya";
// let inputNameLower;

// const inputName = prompt("Woho are you");
// if (inputName) {
//   inputNameLower = inputName.toLowerCase();
//   if (
//     inputNameLower === father.toLowerCase() ||
//     inputNameLower === mother.toLowerCase() ||
//     inputNameLower === child.toLowerCase()
//   ) {
//     alert("Hello");
//   } else {
//     const guest = prompt("к кому пришел?");
//     if (guest.toLowerCase().includes(father.toLowerCase())) {
//       alert("его нет Дома");
//     } else if (guest.toLowerCase().includes(mother.toLowerCase())) {
//       alert("добро пожаловать, но без сюрпризов");
//     } else alert("Не откроем");
//   }
// } else {
//   alert("police");
// }

// используем  SWITCH

// const father = "igor";
// const mother = "Ira";
// const child = "Nikolya";
// let inputNameLower;

// const guest = prompt("Who are you");
// if (guest){
//   if (guest === father || guest === mother || guest === child) {
//     alert ('welcome');
//   } else {
//     const guest = prompt("до кого ви?");
//     switch(true){
//       case guest === null: alert("do not disturb");
//       break;
//       case guest.includes(father): alert("его нет Дома");
//       break;
//       case guest.includes(mother): alert("добро пожаловать, но без сюрпризов");
//       break;
//       case guest.includes(child): alert("телефоную 911");
//       break;
//       default:
//       alert('do not disturb');

//     }
//   }
// }
//==============================================================================================================

/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// let inputUser = +prompt("введите число от 1 до 5");

// if (inputUser >= 1 && inputUser <= 5 && !Number.isNaN(inputUser))
//   switch (inputUser) {
//     case 1:
//       alert("Каталог хостелов");
//       break;
//     case 2:
//       alert("Каталог бюджетных отелей");
//       break;
//     case 3:
//       alert("Каталог отелей ***");
//       break;
//     case 4:
//       alert("Каталог отелей ****");
//       break;
//     case 5:
//       alert("Каталог лучших отелей");
//       break;
//     default:
//       alert("очень жаль, приходите еще");
//   }
// else if (inputUser === 0) {
//   alert("очень жаль, приходите еще!");
// } else {
//   alert('Неверный ввод, возможные варианты 1-5!');
// }

//======================================================================================
// Задачки

// 30) Возведите 2 в 10 степень. Результат запишите в переменную st.
// let a = 2;
// let st =  Math.pow(a,10);
// console.log(st)


// // 31) Найдите квадратный корень из 245.
// let b;
// b = Math.sqrt(245);
// console.log(b);


// // 32) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))
// let j = 379;
// let c = Math.sqrt(j);
// console.log('до целых:', c.toFixed(0), 'до десятых:',c.toFixed(1),'до сотых:',c.toFixed(2));
// // 33) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны
// let numb = 587;
// let sqrt = Math.sqrt(numb);
// console.log(Math.ceil(sqrt));
// console.log(Math.floor(sqrt));

// 34) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
// let a = 19;
// let b = 8;
// let c = (a % b);
// if (c === 0) {
//   console.log ('делится без остатка', c)
// } else {console.log ('делится с остатком', c)}


// 35) Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// let min = Math.min(4, -2, 5, 19, -130, 0, 10)
// console.log(min);
// let max = Math.max(4, -2, 5, 19, -130, 0, 10)
// console.log(max);

// let nmbrs = [4, -2, 5, 19, -130, 0, 10];
// for (const i of nmbrs) {
//   let min;
//   let max;
//   if (i < min) {
//     min = i;
//   }
// }

// 35) Выведите на экран случайное целое число от 1 до 100.

// let rand = Math.ceil((Math.round()*100));
// console.log(rand);

// 36) Необходимо написать программу, где бы пользователю предлагалось ввести число на выбор: 1, 2 или 3, а программа должна сказать, какое число ввёл пользователь: 1, 2, или 3.
// let num = prompt('введите число 1 или 2 или 3');
// alert(`вы ввели ${num}`)
// 37 ) Необходимо написать программу, где бы пользователю предлагалось ввести число  1. Если пользователь ввёл число 1, программа должна вывести сообщение: "Вы ввели число 1". Если пользователь ввёл другое число, программа должна вывести такое сообщение: "Вы ввели число не равное 1"
// let num = Number(prompt('введите число 1'));
// if(num === 1) {
//   alert(`вы ввели ${num}`);
// } else  {
//   alert(`Вы ввели число не равное 1`);
// }
// 38 ) Пользователь вводит число. Проверить число на четное или не четное и вывести в консоль результат проверки.
// let num = Number(prompt('введите число '));

// num % 2 === 0? console.log ('четное') : console.log('нечетное');



// 41) Найдите суму всех товаров в корзине магазина без мелочи, с мелочью
// let arr = [88, 45.87, 2, 100.45];
// let sum = 0;
// for(let i = 0; i<arr.length; i++) {
//   sum +=arr[i]
// }
// console.log(parseInt(sum));
// console.log(parseFloat(sum));

// 42) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
// let i = Number(prompt('введите число '));
// switch (i) {
//   case 1: {
//     alert('Winter');
//     break;
//   }
//   case 2: {
//     alert('Spring');
//     break;
//   }
//   case 3: {
//     alert('Summer');
//     break;
//   }
//   case 4: {
//     alert('Autumn');
//     break;
//   }
//   default:
//   alert('not a season')
// }

// 43) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = Number(prompt('введите число '));
// if (a > 0 && a < 5) {
//   alert('Верно');
// } else {
//   alert('неверно')
// }
// 44)  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = 2;
// let result = 0;
// if (a === 0 || a ===2) {
//   console.log(result = a+7);
// } else {
//   console.log(result =a/10);
// }
// 45)  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// let a = 3;
// let b = 5;
// if (a <= 1 && b >=3) {
//   console.log(a+b);  
// } else {
//   console.log(a-b);
  
// }
// 46)  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.


// 47) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// 48)  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).