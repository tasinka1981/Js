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