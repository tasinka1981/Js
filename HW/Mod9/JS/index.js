/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/


const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");
const lapBtn = document.querySelector(".js-take-lap");
const timer = document.querySelector(".js-time");
const listTime = document.querySelector(".js-laps");
let startTime;
let pauseTime = 0;
let idInt = null;
let currentTime;
let delta;
let minutes;
let seconds;
let milliseconds;
let arrTimer = [];

function start() {
  resetBtn.disabled = false;
  if (startBtn.textContent === "Start" || startBtn.textContent === "Continue") {
    startBtn.textContent = "Pause";
    startTime = Date.now() - pauseTime;
    idInt = setInterval(changeTimer, 100);
  } else if (startBtn.textContent === "Pause") {
    clearInterval(idInt);
    startBtn.textContent = "Continue";
  }
};

function changeTimer() {
  currentTime = Date.now();
  delta = currentTime - startTime;
  timer.textContent = getTimeFormat(delta);
  pauseTime = delta;
};
function getTimeFormat(time) {
  let date = new Date(time);
  minutes = ("0" + date.getMinutes()).slice(-2);
  seconds = ("0" + date.getSeconds()).slice(-2);
  milliseconds = parseInt(date.getMilliseconds() / 100);
  return `${minutes}:${seconds}.${milliseconds}`;
};

function reset() {
  clearInterval(idInt);
  idInt = 0;
  currentTime = "00:00.0";
  timer.textContent = currentTime;
  pauseTime = 0;
  startBtn.textContent = "Start";
  resetBtn.disabled = true;
};
function addListTime() {
  let item = document.createElement("li");
  console.log(item);
  listTime.appendChild(item);
  arrTimer.push(timer.textContent);
  console.log(arrTimer);
  item.textContent = timer.textContent;
};

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", addListTime);