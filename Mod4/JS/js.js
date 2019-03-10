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
// const Student = function(name, birthday, slogan) {
//   this.name = name; //передаем каждому ключу объекта значения из параметров
//   this.birthday = birthday;
//   this.slogan = slogan;
//   this.getSlogan = function(){
//     alert(`${this.slogan}`);
//   }
// };
// const newStudent = new Student('Ben', '2.08.2019', 'Whinter is coming');

// console.log(newStudent);//выыодит наш новый объект студента
// console.log(newStudent.name);// выведет name студента
// newStudent.getSlogan();// вызов метода объекта студента, вернет alert с девизом
//============================================================================================================

// Метод call/apply
// const user = {
//   name: 'Baron',
// };

// const user1 = {
//   name: 'Vasya',
// };

// const myFunc = function (message = '') {
//   console.log('this in myFunc:', this);
//   return `Hello my name is ${this.name}. ${message}`;
// };
// // console.log(myFunc()); // 'name' of undefined
// const result = myFunc.call(user, 'How are you?');
// console.log(result);

// user.getMyname = myFunc;
// console.log('call user1 to user.getMyName:',user.getMyname.call(user1));

// console.log('from user: ', user.getMyname());
//========================================================================================================

// const user = {
//     name: 'Baron',
//   };

//   const user1 = {
//     name: 'Vasya',
//   };

//   const myFunc = function (message = '') {
//     console.log('this in myFunc:', this);
//     return `Hello my name is ${this.name}. ${message}`;
//   };
//===============================================================================

// Функция, которая выводит сообщение 'Собака породы: ${this.breed'}
// пробуем call

// const dog1 = {
//   breed: 'booldog',
// }
// const dog2 = {
//   breed: 'labrador',
// }
// const result = function() {
// let mes = console.log(`Собака породы: ${this.breed}`);
// return mes;
// }
// result.call(dog1)

// const dog1 = {
//   breed: 'booldog',
// }
// const dog2 = {
//   breed: 'labrador',
// }
// const result = function() {
//   return `Собака породы: ${this.breed}`;

// }
// console.log(result.call(dog1));

// пробуем capply

// const dog1 = {
//     breed: 'booldog',
//   }
//   const dog2 = {
//     breed: 'labrador',
//   }

//   const message = function() {
//     return `Собака породы: ${this.breed}`;
//   }
//   const fn = function(callback) {
//     return callback();
//   }
//   console.log(fn(message.bind(dog2)));

//===========================================================
// const Dog = function (name = 'Poops', age, breed, color, male, vegetarian,facebook) {
//   this.name = name;
//   this.age = age;
//   this.breed = breed;
//   this.color = color;
//   this.male = male;
//   this.vegetarian = vegetarian;
//   this.facebook = facebook;
//   this.yelp = function () {
//     return `wwwwwwwwooooff`
//   }
// }

// const dog = new Dog('Bolls', 3, 'чау-чау', 'red', 'female', true, 'http//facebook.com/poops');
// console.log('dog:',dog);
// console.log(dog.yelp());
// dog.getAboutData = function () {
//   return `name: ${this.name}; age: ${this.age}; breed: ${this.breed};`
// }
// console.log(dog.getAboutData());
// const dog1 = new Dog(undefined, 5, 'боксер', 'black', 'male', false, '');
// console.log('dog1:', dog1);
//===================================================================================
// Модуль 5/ перенести

// const numbers = [1, 2, 3, 4, 5]; //not our mass

// // const ourArray =(transfer,numbersClone) => {//new mass
// //   let newMass = []; //future mass
// //   for (const numbersCloneElement of numbersClone) { //iteration of new mass
// //     const newElement = transfer(numbersCloneElement); // rewrite transfer element
// //     newMass.push(newElement); // rewrite new mass
// //   }
// //   return newMass; // return parametrs in numbersclone
// // };

// const double = (number) => number *2; // our function

// const triple = (number) => number *3;
// // const triple = function (number) {     //our function
// //   return number * 3;
// // };
// // const doubledNumbers = ourArray(double, numbers); // we need results
// // console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// // const tripledNumbers = ourArray(triple,numbers);
// // console.log(tripledNumbers); // [3, 6, 9, 12, 15]

// const newMass = [];
// numbers.map(function(el){ return newMass.push(el*2) });
// const newMass2 = [];
// numbers.map(function(el){
//   return newMass2.push(triple(el));
// });

// console.log(numbers);
// console.log(newMass);
// console.log(newMass2);

//===============================================

// const values = [5, 7, 8, 9, 10];
// // const newArr = values.map(function(el, index) {return el*2;});
// const newArr = values.map((el => double(el)));
// // const newArr = value.map(double);
// const double = (number) => number *2; // our function
// console.log(newArr);
//=====================================================================

// Сделать функцию, которая циклом будет перебирать масив значений цен на товар.
// Каждый элемент массива является ценой на товар в долларах.
// Нужно вывести цену в гривнах в новом массиве.

// 1-й вариант
// const numbers = [31, 32, 13, 44, 25];
// const newNumbers = [];
// for(const el of numbers){

//  const newEl = el*27.4;
//  console.log(newEl);
//  newNumbers.push(newEl);
// }
// console.log(newNumbers);

// 2-вариант
// const numbers = [31, 32, 13, 44, 25];

// const map = function(arr, transfer) {
//   const newNumbers = [];
//   for(const el of arr){
//     const newEl = el*27.4;
//     console.log(newEl);
//     newNumbers.push(newEl);
//    }
//    return newNumbers;
// }

// console.log(map(numbers));

// 3-й вариант (сщ стрелочной функцией(callback))

// const numbers = [31, 32, 13, 44, 25];

// const map = function(arr, transfer) {
//   const newNumbers = [];
//   for(const el of arr){
//     const newEl = transfer(el)
//     console.log(newEl);
//     newNumbers.push(newEl);
//    }
//    return newNumbers;
// }

// const arrow = (number) => number*27.4;

// console.log(map(numbers, arrow));

//===============================================================================================================
// ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
// Задача 1
/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };
// // - добавляет поле mood со значением 'happy'
// user.mood = 'happy';
// console.log(user);

// // - заменяет значение hobby на 'javascript'
// user.hobby = 'javascript';
// console.log(user);

// // - удаляет свойство premium
// delete user.premium;
// console.log(user);

// // - выводит содержимое объекта user в формате ключ:значение
// //       используя цикл for...in
// for(const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// // - выводит содержимое объекта user в формате ключ:значение
// //       используя Object.keys и for...of

// let arr = Object.keys(user);
// console.log(arr);
// for (let el of arr) {
//   console.log(`${el}: ${user[el]}`);
// }

// // - выводит содержимое объекта user в формате ключ:значение
// //       используя Object.entries и for...of
// let entries = Object.entries(user);
// console.log(entries);
// for (const item of entries) {
// console.log(`${item[0]}: ${item[1]}`);
// }

//====================================================================================
// Задача 2
/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,

// };
// let max = 0;
// let findName;
// for (let key in tasksCompleted) {
//   // console.log(tasksCompleted[key])
//   if (tasksCompleted[key] > max) {
//     max = tasksCompleted[key];
//     findName = key;
//   }
// }
// console.log(max);
// console.log(findName);

//===============================================================
// Задача3
/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// const countProps = function(obj) {
//   let arr = Object.keys(obj);
//   let quantity = arr.length;
//   return quantity;

// };

// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

//=============================================================================
// Задача 4
/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// const isObjectEmpty = function(obj) {
//   let arr = Object.keys(obj);
//   if (arr.length === 0) {
//     return true;
//   }
//   return false;
// };

// // Вызовы функции для проверки
// console.log(isObjectEmpty({})); // true

// console.log(isObjectEmpty({ a: 1 })); // false

// console.log(isObjectEmpty({ a: 1, b: 2 })); // false

// //====================
// задачка

// const obj = {person: 'Thor Odinson'};
// const clone = Object.assign({}, obj);
// console.log.log(clone); // {person: 'Thor Odinson'}

// const first = {name:}
//=======================================================================================
//  Задача 5
/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// const countTotalSalary = function(salaries) {
//   let summ = 0;
//   for (const key in salaries) {
//     summ += salaries[key];
//   }
//   return summ;
// };
// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

//===============================================================================
// Задача 6
/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// function getAllPropValues(arr, prop) {

//   let arrOfProp = [];
//   for (let obj of arr) {
//     if(obj.hasOwnProperty(prop)) {
//     arrOfProp.push(obj[prop]);
//   }
// }
//   return arrOfProp;
// }

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []
//=========================================================================

// Задача 7
/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/

// const User = function(name, isActive, age, friends) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;
//   this.getUserInfo = function() {
//     console.log(`User ${name} is ${age} years old and has ${friends} friends`)
//   }
// }
// let user = new User('Kate', true, 24, 5);
// console.log(user);
// user.getUserInfo();
//=============================================================================================================
// Задача 8
/*  
  Расставьте отсутствующие this в методах объекта store
*/

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);

//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);

//     this.managers.splice(idx, 1);

//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);

//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']
//===============================================================================================================

// Задача 9
/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;

//     console.log(this.password);
//   };

//   this.getAccountInfo = function() {
//     console.log(`
//       Login: ${this.login},
//       Pass: ${this.password},
//       Type: ${this.type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc"); // 'asdzxc'

// account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// hotel.char = 25;
// console.log(hotel);
//===========================================================
// Задачка
// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

// const  isEmpty = function (obj) {
//   let arr = Object.keys(obj);
//   if (arr.length === 0) {
//     return true
//   } else {
//     return false
//   }
// }
// let shedule = {}
// console.log(isEmpty(shedule));
// shedule.name = 'pol';
// console.log(isEmpty(shedule));

// 2-вариант
// const  isEmpty = function (obj) {
//   for(let key in obj) {
//     if (key) {

//     }
//   }
// }

//=========================================================================
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
// function toSumm (obj) {
//   let summ = 0;
//   for (let key in obj) {
//     summ += obj[key];
//   }
//   return summ
// }

// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
// console.log(toSumm(salaries));
//========================================================================================

// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».
// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// function getMaxSalary (obj) {
//   let maxSalary = 0;
//   let name;
//   for (let key in obj) {

// if (obj[key] > maxSalary) {
//   maxSalary = obj[key];
//   name = key
//   // console.log(name);
// }
//   }
//   return name;

// }
// console.log(getMaxSalary(salaries));
//==================================================================

// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2.

// до вызова
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj, callback) {
//   for (let key in obj) {
// if (callback(obj[key])) {
//   obj[key] = obj[key] * 2;
// }
//   }
// };

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

// multiplyNumeric(menu, isNumeric)
// console.log(menu);
// после вызова
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

//======================================================
// Задание 10 Найти последовательность Хэеса, то есть пользователь вводит число и в результате должно быть выдано сообщение, с самой последовательностью, количеством шагов,
// которое понадобилось для нахождения этой последовательности, и вершиной последовательности, это максимальное число из этой последовательности. Последовательность
// Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, делим на 2, если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не
// будет равно 1.
// 9*3+1=28
// 28/2=14
// 14/2=7
// 7*3+1=22
// 22/2=11
// 11*3+1=34
// 34/2=17
// 17*3+1=52
// 52/2=26
// 26/2=13
// 13*3+1=40
// 40/2=20
// 20/2=10
// 10/2=5
// 5*3+1=16
// 16/2=8
// 8/2=4
// 4/2=2
// 2/2=1

// let a;
// function getNum(a) {
//   let i = 0;
//   let max = 0;
//   do {
//     if (a % 2 === 0) {
//       a = a / 2;
//     } else {
//       a = a * 3 + 1;
//       if(max < a) {
//         max =a}
      
//     }
//     i = i + 1;
//     console.log(a)
//   } while (a !== 1);
//   return (`максимальное число: ${max}, колличество итераций: ${i}`);
// }

// console.log(getNum(100));
//=====================================================================================================================

// call

// let Kate = {
//    name: 'Kate',
//    surname: 'Hrybkova',
//    age: '24',
// }
// let Lora = {
//    name: 'Lora',
//    surname: 'Plushkina',
//    age: '28',
// }
// let Richard = {
//    name: 'Richard',
//    surname: 'Robinson',
//    age: '50',
// }

// let showGreed = function () {
//   console.log (`${this.name} ${this.surname}, поздравляем! Вам ${this.age}`);
// }

// showGreed.call(Richard);
// showGreed.call(Lora);
// showGreed.call(Kate);
//====================================================
// bind

// let Kate = {
//    name: 'Kate',
//    surname: 'Hrybkova',
//    age: '24',
// doubleTrouble: function () {
//   console.log(`${this.name}`);
  
// }
// }
// let Lora = {
//    name: 'Lora',
//    surname: 'Plushkina',
//    age: '28',
// }
// let Richard = {
//    name: 'Richard',
//    surname: 'Robinson',
//    age: '50',
// }
// const fn = function(call) {
//   return call();
// }

// fn(Kate.doubleTrouble.bind(Kate))
// console.log(Lora);

// class Student {constructor (){}}
// console.log(typeof(Student));
	
// typeof Student === function