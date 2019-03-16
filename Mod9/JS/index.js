'use strict'
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Если все ок, то вызываем resolve и передаем данные
      resolve("Data passed into resolve function :)");
  
      // Если что-то не так, вызваем reject и передаем ошибку
      // reject("Error passed into reject function :(")
    }, 2000);
  });
console.log("BEFORE promise.then");

const onResolve = data => {
  console.log("INSIDE promise.then - onResolve");
  console.log(data); // "Data passed into resolve function :)"
};

const onReject = error => {
  console.log("INSIDE promise.then - onReject");
  console.log(error); // "Error passed into reject function :("
};

promise.then(
  // будет вызвана через 2 секунды, если обещание выполнится успешно
  onResolve,
  // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
  onReject
);

// выполнится мгновенно
console.log("AFTER promise.then");



