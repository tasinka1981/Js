'use strict'

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];



const isLoginValid = function(login) {
  let min = 4;
  let max = 16;
  if (login.length >= min && login.length <= max) {
    return true;
  } else {
    return false;
  }
};
// console.log (isLoginValid ('Ajax'));



const isLoginUnique = function(allLogins, login) {
  let message;
  for (const item of allLogins) {
    if (login === item) {
      message = false;
      break;
    } else {
      message = true;
    }
  }
  // console.log(message);
  return message;
};

// console.log(isLoginUnique (logins, "Poly"));



const addLogin = function(allLogins, login) {
  let resultValid = isLoginValid(login);
  if (resultValid === false) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else if (isLoginUnique(allLogins, login) === true) {
    console.log("Логин успешно добавлен!");
    allLogins.push(login);
    console.log(allLogins);
  } else {
    console.log("Такой логин уже используется!");
  }
};


// // Вызовы функции для проверки
addLogin(logins, "Zod");
addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins,'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins,'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'Ajax');