'use strict'
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