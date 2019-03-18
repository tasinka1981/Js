"use strict";

// Задача1
// const btn = document.querySelector('button');
// const sayHi = () => alert('Привет!');
// btn.addEventListener('click', sayHi);

//=======================================================================
// Задача2

// const btn = document.querySelector('button');
// const changeValue = () => input.value = 'kjhkjh';
// btn.addEventListener('click', changeValue);

//=======================================================================
// Задача3
// const btn = document.querySelector('button');
// const val = document.querySelector('input');
// const enteredButton = () => alert(val.value);
// btn.addEventListener('click', enteredButton);

//=======================================================================
// Задача4
// const btn = document.querySelector('button');
// const val = document.querySelector('input');
// const enteredButton = () => alert(Math.pow(val.value, 2));
// btn.addEventListener('click', enteredButton);

//=======================================================================
// Задача5
// const btn = document.querySelector('button');
// const val1 = document.querySelector('#input1');
// const val2 = document.querySelector('#input2');
// const changeButton = () => {
//     let valNew = val1.value
//     val1.value = val2.value
//     val2.value = valNew;
// };
// btn.addEventListener("click", changeButton);

//=======================================================================
// Задача6

// const btn = document.querySelector('input');
// const changeButton = () => {
//     btn.value = 'Привет'
// }
// btn.addEventListener('click', changeButton);

//=======================================================================
// Задача8
// const btns = Array.from(document.querySelectorAll('button'));
// const btnOn = btns[0];
// const btnOff = btns[1];
// const inp = document.querySelector('#input');
// const clickBtnOn = () => {
//     inp.disabled = true;
//     console.log(inp.attributes);
// }
// const clickBtnOOff = () => {
//     inp.disabled = false;
//     console.log(inp.attributes);
// }

// btnOn.addEventListener('click', clickBtnOn);
// console.log();

// btnOff.addEventListener('click',clickBtnOOff);
//================================================================================
// Задача: таймер обратного отсчета

// let date = new Date();
// console.log(date);
// let dateMsec = date.getTime();
// console.log(dateMsec);
// const deadLine = new Date(2019, 2, 14, 15, 0, 0, 0);
// let deadLineMsec = deadLine.getTime();
// console.log(deadLineMsec);
// let result = deadLineMsec - dateMsec;
// console.log(result);

// let sec = Math.floor(result/1000%60);
// console.log('секунды ' +sec);
// let min = Math.floor(result/1000/60%60);
// console.log('минуты ' +min);
// let hour = Math.floor(result/1000/60/60%24);
// console.log('часов ' +hour);
// let day = Math.floor(result/1000/60/60/24);
// console.log('дней ' +day);

// Вариант 2
// function time(millisec) {
//   var seconds = (millisec / 1000).toFixed(0);
//   var minutes = Math.floor(seconds / 60);
//   seconds = Math.floor(seconds % 60);
//   return 'До обеда осталось '  + minutes + " минут " + seconds + ' секунд';
//  }
//  let date = new Date();
//  let dateFuture = new Date(2019, 2, 14, 14, 0, 0, 0);
//  let x =  dateFuture - date ;

//  let p = document.querySelector('p')
//  p.textContent = time(x)

// result += ' Time: ' + date.getHours() + ':'; // часы
// result +=  date.getMinutes() + ':'; // минуты
// result +=  date.getSeconds() + ':'; // секунды
// result +=  date.getMilliseconds() + ''; // милисекунды
// // строка должна показать текущее время и дату
// console.log(result);

//================================================================================
// додаткове завдання 1

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// const btn = document.querySelector('.button');
// console.log(btn);
// let i=0;
// const clickOnBtn = () => {
//     i=i+1;
//     btn.textContent = i;
// }
// btn.addEventListener('click', clickOnBtn);
//============================================================================================
// додаткове завдання 2
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

// const btn = document.querySelector('button[data-action="add"]');
// const arrInput = Array.from(document.querySelectorAll("input"));
// const result = document.querySelector('.result');
// console.log(arrInput);
// const onClickBtn = () => {
//   let sum = arrInput.reduce(function(acc, i) {
//     console.log(i);
//     return acc = acc + Number(i.value);
//   }, 0);
// result.textContent = sum;
// };
// btn.addEventListener('click', onClickBtn );

//============================================================================================
// додаткове завдання 3
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// const btn1 = document.querySelector('button[data-action="sub"]');
// const btn2 = document.querySelector('button[data-action="add"]');
// const counter = document.querySelector('.value');
// let sum = 0;
// const increment = () => {
//     sum = sum + 1;
//     counter.textContent = sum;
// };
// const decrement = () => {
//     sum = sum - 1;
//     counter.textContent = sum;
// };
// btn1.addEventListener('click', decrement);
// btn2.addEventListener('click', increment);

// Вариант через класс

// class Counter {
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//   }

//   increment() {
//     this.value += 1;
//     this.onChange(this.value);
//   }
//   decrement() {
//     this.value -= 1;
//     this.onChange(this.value);
//   }

// }

// let plus = document.querySelector('button[data-action="add"]');
// let minus = document.querySelector('button[data-action="sub"]');
// let valueSpan = document.querySelector('.value');

// function changeValue(value) {
//   valueSpan.textContent = value;
// }

// const counter = new Counter(changeValue);

// console.log(counter.onChange);

// plus.addEventListener('click', counter.increment);
// minus.addEventListener('click', counter.decrement);

//============================================================================================
// додаткове завдання 4
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// const result = document.querySelector(".result");
// const btn = document.querySelector(".btn");
// const arr = Array.from(document.querySelectorAll("input"));
// console.log(arr);

// const checkInput = (event) => {
//   event.preventDefault();
//  arr.find(function(item) {
//     if ((item.checked === true)) {
//       result.textContent = `Result: ${item.value}`;
//     }

//   });
// };
// btn.addEventListener("", checkInput);
//============================================================================================
// додаткове завдання 5
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// const conteiner = document.querySelector(".images");
// const displaySrc = event => {
//   alert(event.target.src);
// };

// conteiner.addEventListener("click", displaySrc);

//============================================================================================
// додаткове завдання 6
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// const list = document.querySelector('.list');

// const clickOn = (event) => {
// const target = event.target;
// const parent = target.parentNode;

// console.log(event.target);// для себя - посмотреть
// console.log(target.nodeName);// для себя - посмотреть
// console.log(parent);// для себя - посмотреть
// if (target.nodeName !== 'BUTTON') return;
// parent.remove();
// };

// list.addEventListener('click', clickOn);
//============================================================================================
// додаткове завдання 7

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// const list = document.querySelector(".input-list");

// const checkInput = event => {
//   const target = event.target;

//   // console.log(event.target); // для себя - посмотреть
//   // console.log(target.nodeName); // для себя - посмотреть
//   // console.log(parent); // для себя - посмотреть
//   if (target.nodeName !== "INPUT") return;
//   // console.log(target.dataset.length); // для себя - посмотреть
//   // console.log(target.value); // для себя - посмотреть
//   compareValue(target);
// };

// function compareValue (elem) {
//   const value = elem.value
//   if (Number(elem.dataset.length) === (String(value).length)) {
//     // console.log(true);// для себя - посмотреть
//     // console.log(elem.dataset.length);// для себя - посмотреть
//     // console.log(value.length);// для себя - посмотреть
//     elem.classList.add("valid");
//   } else {
//     // console.log(false);// для себя - посмотреть
//     // console.log(elem.dataset.length);// для себя - посмотреть
//     // console.log(value.length);// для себя - посмотреть
//     elem.classList.add("invalid");
//   }
// }
// list.addEventListener("focusout", checkInput);

//============================================================================================
// додаткове завдання 8
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// const text = "Input is in focus!";
// const input = document.querySelector(".input");
// const message = document.querySelector(".message");
// const value = document.querySelector(".input-value");

// function displayText() {
//   message.textContent = text;
// }

// function displayValue() {
//   value.textContent += input.value;
// }

// input.addEventListener("focus", displayText);
// input.addEventListener("input", displayValue);

//============================================================================================
// додаткове завдання 9

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// const modal = document.querySelector(".js-modal-backdrop");
// const btn = document.querySelector(".btn");
// const closeBtn = document.querySelector('[data-action="close-modal"]');
// // const modalContent = document.querySelector('.modal-content');

// function openModal() {
//   modal.classList.remove("modal-hidden");
// }
// function closeModal(event) {
//   if (event.target === closeBtn || event.target === modal)
//     modal.classList.add("modal-hidden");
//   return;
// }

// btn.addEventListener("click", openModal);
// modal.addEventListener("click", closeModal);

//============================================================================================
// додаткове завдання 10

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

// const menu = document.querySelector(".js-menu");

// function activeLink(event) {
//   const target = event.target;
//   event.preventDefault();
//   if (target.nodeName !== "A") return;

//   changeStatus(target);
// }
// function changeStatus(target) { 
//   const currentTarget = document.querySelector(".active");
//   if (currentTarget) {
//     currentTarget.classList.remove("active");
//   }
//   target.classList.add("active");
// }

// menu.addEventListener("click", activeLink);
