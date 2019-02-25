"use strict";

// const user = {
//     name: 'Franc',
//     age: 21,
//     male: true,
//     getInfo: function () {
//         return `name: ${this.name} age: ${this.age} male: ${this.male}`
//     }
// };
// console.log (user.name);
// console.log (user["age"]);
// console.log (user["male"]);

// user.age = 26;
// user.height = 180;

// console.log('user', user);
// console.log(user.getInfo());
// delete user.male;
// console.log (user.male);

// for (const key in user) {
//     console.log (`${key}: ${user[key]}`);
// }

// const userArr = Object.entries(user)
// console.log(userArr)

// for (const el of userArr) {
//     console.log(`${el[0]}:${el[1]}`)
// }

//====================================================
// функция, которая находит необходимый ключ и выводит его значение (в этом случае, при вызове ключа объекта прописываем через квадратные скобки)

// const user = {
//   name: "Nataly",
//   age: 37,
//   height: 173,
//   status: "happy"
// };
// console.log(user);
// console.log('age' in user);//узнать, есть ли такой ключ в объекте
// console.log ( user.hasOwnProperty('age')); //узнать, есть ли такой ключ в объекте

// const getPropVal = (obj, prop) => {
//   console.log(obj[prop]);
// };

// getPropVal(user, "height");

//=============================
// Методы объекта (значением ключа может быть функция)
// const user = {
//   name: "Nataly",
//   age: 37,
//   height: 173,
//   status: "happy",
//   sayHi() {
//       console.log ('Hi')
//   }
// };
// console.log(user);
// console.log(user.height);

// console.log(user.sayHi);
// console.log(user['sayHi']);
// user.sayHi();

//===========================================================================

// const user = {
//   name: "Nataly",
//   friends: 300,
//   age: 37,
//   height: 173,
//   status: "happy",
//   addFriends(val) {
//       user.friends += val
//   }
// };
// user.addFriends(50)
// console.log(user.friends)

//=================================================================================
// вывести все пары:ключ - значение

// const user = {
//   name: "Nataly",
//   friends: 300,
//   age: 37,
//   height: 173,
//   status: "happy",
//   addFriends(val) {
//     user.friends += val;
//   }
// };

// console.log(Object.keys(user)); //выводит массив ключей
// console.log(Object.entries(user)); //выводит массив пар: ключ-значение

// const entries = Object.entries(user);
// console.log(entries,':выводит массив пар:ключ-значение, как и выше только через константу');

// 1-й вариант записи перебора массива пар и выведения этих пар
// const entries = Object.entries(user);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   // console.log(entry);
//   console.log(`${key}: ${value}`);
// }
// 2-й вариант записи  - деструктуризация
// const entries = Object.entries(user);
// for (const entry of entries) {
// const [key, value] = entry;
// console.log('entry:', entry);
// console.log(`${key}: ${value}`);
// }

//3-й вариант записи - деструктуризация - сокращенный
// const entries = Object.entries(user);
// for (const [key, value] of entries) {
//   console.log(`${key}: ${value}`);
//   }

//============================================================================================================
// Задачка - добавление в объект

// const shop = {
//   products: ['apples','bananas', 'lemons'],
//   addProduct(value) {
//     shop.products.push(value);
//   }
// }
// shop.addProduct('mango');
// console.log(shop);

// посложнее: объект магазин состоит из объектов(каталог товаров). добавляем в этот каталог "манго". выводим карточку товара "лимон".
// const shop = {
//   products: [
//     {
//       name: "apples",
//       amounth: 100,
//       price: 10
//     },
//     {
//       name: "bananas",
//       amounth: 200,
//       price: 20
//     },
//     {
//       name: "lemons",
//       amounth: 150,
//       price: 15
//     }
//   ],
//   addProduct(value) {
//     shop.products.push(value);
//   },
//   getProductName(productName) {
// for (const item of shop.products) {
//   if (item.name === productName) {
//     return item;
//   }
// }
//   }
// };
// shop.addProduct({ name: "mango", amounth: 300, price: 30 });
// console.log(shop);

// const val = shop.getProductName('lemons');
// console.log(val);
//=======================================================================================
// Найти индекс игрока
// const users = ["Greengo,", "Riki", "Floyd", "Marchellos"];
// let userIndex;
// for (let input of users) {
//   if (input === "Riki") {
//     userIndex = users.indexOf(input);
//   }
// }
// console.log(userIndex);
//====================================================================================
//добавление нового игрока через includes
// let newUser = prompt("Add new user");

// if (users.includes(newUser)) {
//   alert('this user has already');
// } else {
//   users.push(newUser);
// }
// console.log(users);
//====================================================================================
//добавление нового игрока через цикл(не получилось)
// let newUser = prompt("Add new user");
// for (let user of users) {
//   let exist = false;
//   if (user === newUser) {
//     exist = true;
//   }
//   if (exist === true) {
//     alert('this user has already');
//   }
//   else {
//     users.push(newUser);
//   }
// }
// console.log(users);
//====================================================================================
// удалить тгрока по индексу
// users.splice(userIndex, 1);
// console.log(users);
//====================================================================================
// // обновить игрока по индексу
// users[1] = 'Max';
// console.log(users);
//===============================================================
// Записать функцией выведение индекса
// const users = ["Greengo,", "Riki", "Floyd", "Marchellos"];
// let userIndex;
// function getUserId(name) {
//   for (let input of users) {
//       if (input === name) {
//         userIndex = users.indexOf(input);
//       }
// }
// if (userIndex !== undefined) {
//   return(userIndex);
// } else {
//   alert('user is not finded');
// }
// console.log(userIndex);
// }
// console.log(getUserId('fghfghfg'));
// console.log(users);


//====================================================================================
// Запись функцией добавление нового игрока
// const users = ["Greengo,", "Riki", "Floyd", "Marchellos"];

// function addUser(arr, name) {
// if (arr.includes(name)) {
//   alert('this user has already');
// } else {
//   arr.push(name);
// }
// }

// addUser(users, 'jhkjhkjhjkh');
// console.log(users);
//==========================================================
// удаление

// // const users = ["Greengo,", "Riki", "Floyd", "Marchellos"];
// const deletUser = (arr, userIndex) => {
// arr.splice(userIndex,1);
// }
// deletUser (users, 2);
// console.log(users);
// deletUser(users, getUserId('Riki'));
// console.log(users);

//==========================================================
// обновить

// const updateUser = function (index, name,arr) {
// arr[index] = name;
// return arr;
// }
// console.log(updateUser(getUserId('Greengo'),'Max',users));



//=====================================================================================
// Выводим индекс элемента с определенным id
// const users = [
//   {id: 'user_id_111', name: 'Greengo'},
//   {id: 'user_id_222', name: 'Riki'},
//   {id: 'user_id_333', name: 'Floyd'},
//   {id: 'user_id_444', name: 'Marchellos'},
// ];
// console.log(users);

// function getUserID(id) {
//   let userIndex = '';
//   for(let input of users) {
//     if (input.id === id) {
//       userIndex = users.indexOf(input);
//     }

//   }
//   if (userIndex !== '') {
//     return userIndex;
//   } else {
//     alert('user is not finded');
//   }
//   console.log(userIndex);
// }
// console.log(getUserID('user_id_444'));
// console.log(users[getUserID('user_id_444')].name);


// function deleteUser(userIndex) {
//   users.splice(userIndex,1)
// }
// console.log(users);


// console.log ('aftedDelete', users);
// deleteUser(getUserID('user_id_444'));
// console.log(users);


// const updateUser = function (index, name, arr) {
//   arr[index].name = name; 
//   return arr;
// }

// const update = updateUser(getUserID('user_id_222'),'Max',users)
// console.log(users)
// // написать функцию getAllUsers(arr), которая выводит сообщение в консоль id: nanme

// const getAllUsers = function(arr) {
//   for (const el of arr) {
//     console.log(`id: ${el.id} name: ${el.name}`);
//   }
// }

// getAllUsers(users);



//===========================================================================================================
const Student = function(name, birthday, slogan) {
  this.name = name; //передаем каждому ключу объекта значения из параметров
  this.birthday = birthday;
  this.slogan = slogan;
  this.getSlogan = function(){
    alert(`${this.slogan}`);
  }
};
const newStudent = new Student('Ben', '2.08.2019', 'Whinter is coming');

console.log(newStudent);//выыодит наш новый объект студента
console.log(newStudent.name);// выведет name студента
newStudent.getSlogan();// вызов метода объекта студента, вернет alert с девизом


//===============================================================================================================

















// //====================
// задачка

// const obj = {person: 'Thor Odinson'};
// const clone = Object.assign({}, obj);
// console.log.log(clone); // {person: 'Thor Odinson'}

// const first = {name:}
