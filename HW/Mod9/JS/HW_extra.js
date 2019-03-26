/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

// class Stopwatch {
//   constructor(elem) {
//     this.elem = elem;
//     this.startTime = null;
//     this.deltaTime = null;
//     this.intervalFunction = null;
//   }

//   get createTimer() {
//     let y =
//       '<div class="stopwatch"><p class="time js-time">00:00.0</p><button class="btn js-start">Start</button><button class="btn js-take-lap">Lap</button><button class="btn js-reset">Reset</button></div><ul class="laps js-laps"></ul>';
//     this.elem.innerHTML = y;
//   }
// }

// get toggleAttr(elem) {
//     if (elem.dataset.action === true) {
//         elem.dataset.action = !elem.dataset.action
//     }
// }



// const startBtn = document.querySelector(".js-start");
// const resetBtn = document.querySelector(".js-reset");
// const lapBtn = document.querySelector(".js-take-lap");
// const timer = document.querySelector(".js-time");
// const listTime = document.querySelector(".js-laps");
// let startTime;
// let pauseTime = 0;
// let idInt = null;
// let currentTime;
// let delta;
// let minutes;
// let seconds;
// let milliseconds;
// let arrTimer = [];
// let arrToDelete =[];


// function start() {
//   resetBtn.disabled = false;

//   if (startBtn.textContent === "Start" || startBtn.textContent === "Continue") {
//     startBtn.textContent = "Pause";
//     startTime = Date.now() - pauseTime;
//     idInt = setInterval(changeTimer, 100);
//   } else if (startBtn.textContent === "Pause") {
//     clearInterval(idInt);
//     startBtn.textContent = "Continue";
//   }
// }

// function changeTimer() {
//   currentTime = Date.now();
//   delta = currentTime - startTime;
//   timer.textContent = getTimeFormat(delta);
//   pauseTime = delta;
// }
// function getTimeFormat(time) {
//   let date = new Date(time);
//   minutes = ("0" + date.getMinutes()).slice(-2);
//   seconds = ("0" + date.getSeconds()).slice(-2);
//   milliseconds = parseInt(date.getMilliseconds() / 100);
//   return `${minutes}:${seconds}.${milliseconds}`;
// }

// function reset() {
//   clearInterval(idInt);
//   idInt = 0;
//   currentTime = "00:00.0";
//   timer.textContent = currentTime;
//   pauseTime = 0;
//   startBtn.textContent = "Start";
//   resetBtn.disabled = true;
//   clearList();
// }
// function addListTime() {
//     arrToDelete = [];
//   let item = document.createElement("li");
//   console.log(item);
//   listTime.appendChild(item);
//   arrTimer.push(timer.textContent);
//   console.log(arrTimer);

//   item.textContent = timer.textContent;

// }
// function clearList () {
//   arrToDelete = document.querySelectorAll('li');
// // console.log(arrToDelete);

// // listTime.remove(arrToDelete);
// arrToDelete.remove();
// listTime.removeChild(arrToDelete);
//   // console.log(listTime);
// }

// startBtn.addEventListener("click", start);
// resetBtn.addEventListener("click", reset);
// lapBtn.addEventListener("click", addListTime);
