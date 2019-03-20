"use strict";
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Если все ок, то вызываем resolve и передаем данные
//       resolve("Data passed into resolve function :)");

//       // Если что-то не так, вызваем reject и передаем ошибку
//       // reject("Error passed into reject function :(")
//     }, 2000);
//   });
// console.log("BEFORE promise.then");

// const onResolve = data => {
//   console.log("INSIDE promise.then - onResolve");
//   console.log(data); // "Data passed into resolve function :)"
// };

// const onReject = error => {
//   console.log("INSIDE promise.then - onReject");
//   console.log(error); // "Error passed into reject function :("
// };

// promise.then(
//   // будет вызвана через 2 секунды, если обещание выполнится успешно
//   onResolve,
//   // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//   onReject
// );

// // выполнится мгновенно
// console.log("AFTER promise.then");

//===============================================================================================================
// ДОПОЛНИТЕЛЬНЫЕ ЗАДАЧИ
// ЗАД1

/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548"
// ];


// const btnStart = document.querySelector('[data-action="start"]');
// const btnStop = document.querySelector('[data-action="stop"]');
// const main = document.querySelector("body");
// let timer;

// function startChange() {
//   timer = setInterval(function() {
//     btnStart.disabled = true;
//     let rand = Math.floor(Math.random() * colors.length);
//     main.style.backgroundColor = colors[rand];
//   }, 1000);
// }
// function stopChange() {
//   btnStart.disabled = false;
//   clearInterval(timer);
// }

// btnStart.addEventListener("click", startChange);
// btnStop.addEventListener("click", stopChange);

//===============================================================================================================
// ЗАД2

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// let minutes;
// let seconds;
// let milliseconds;

// function getFormattedTime(time) {
//   let date = new Date(time);
//   console.log(date);
  
//   minutes = ("0" + date.getMinutes()).slice(-2);
//   seconds = ("0" + date.getSeconds()).slice(-2);
//   milliseconds = parseInt(date.getMilliseconds() / 100);

//   return `${minutes}:${seconds}.${milliseconds}`;
// }

// console.log(getFormattedTime(1523621052858)); // 04:12.8

// console.log(getFormattedTime(1523621161159)); // 06:01.1

// console.log(getFormattedTime(1523621244239)); // 07:24.2

//===============================================================================================================
// ЗАД3

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");
// let minutes;
// let seconds;
// let milliseconds;

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };



// function startTimer() {
//   timer.startTime = Date.now();
//   if (timer.id != null) {
//     clearInterval(timer.id);
//   }
//   timer.id = setInterval(() => {   
//     timer.deltaTime = Date.now() - timer.startTime;
//     console.log(timer.deltaTime);

//     updateClockface(clockface, timer.deltaTime);
//   }, 100);

  
// }

// function stopTimer() {
//     clearInterval(timer.id);
    
    
// }

// // timer.id = setInterval(() => {

// // }, 100);

// /*
//  * Вспомогательные функции
//  */

// /*
//  * Обновляет поле счетчика новым значением при вызове
//  * аргумент time это кол-во миллисекунд
//  */
// function updateClockface(elem, time) {
//   // Используйте функцию getFormattedTime из задания #1
//   elem.textContent = getFormattedTime(time);
// }

// function getFormattedTime(time) {
//   let date = new Date(time);
//   minutes = ("0" + date.getMinutes()).slice(-2);
//   seconds = ("0" + date.getSeconds()).slice(-2);
//   milliseconds = parseInt(date.getMilliseconds() / 100);

//   return `${minutes}:${seconds}.${milliseconds}`;
// }

// // /*
// //  * Подсветка активной кнопки
// //  */
// function setActiveBtn(target) {
//   if(target.classList.contains('active')) {
//     return;
//   }

//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');

//   target.classList.add('active');
// }

// startBtn.addEventListener("click", startTimer);
// stopBtn.addEventListener("click", stopTimer);


//=================================================================
// Задание 4
/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 * 
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 * 
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 * 
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 * 
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 * 
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
*/

// const DELAY = 3000;
// const quantity = 100;


// function processOrder(value) {

//   return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//     if(!isNaN(value)) {
//       if(value <= quantity) {
//         resolve('Ваш заказ готов!');
//       } else {
//         resolve("К сожалению на складе не достаточно товаров!");
//       }
//     }
//     else {
//       reject('"Некорректный ввод!"');
//     }
//   }, DELAY)
// })
// }

//   // Вызовы функции для проверки
// processOrder(50)
// .then(console.log) // Ваш заказ готов!
// .catch(console.log);

// processOrder(50)
// .then(console.log) // Ваш заказ готов!
// .catch(console.log);

// processOrder(500)
// .then(console.log) // К сожалению на складе недостаточно товаров!
// .catch(console.log);

// processOrder("lorem")
// .then(console.log)
// .catch(console.log); // Некорректный ввод!


