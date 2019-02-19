'use strict'
// 1.
// const clients = ["Mango", "Poly", "Ajax"];
// console.log( clients[0] ); // Mango
// console.log( clients[1] ); // Poly
// console.log( clients[2] ); // Ajax

// clients[3] = 'Alex';
// console.log( clients[3] );
// clients.length = 2;
// console.log( clients.length);
// console.log( clients);


// 2.
// const message = "Welcome!to!Bahamas!";
// console.log(message.split("!"));


// 3.
// const clients = ["Mango", "Poly", "Ajax"];
// console.log( clients.join(" ")); // "Mango Poly Ajax"
// console.log( clients.join("*")); // "Mango,Poly,Ajax"
// console.log( clients.join("-")); // "Mango-Poly-Ajax"


// 4.
// const clients = ["Mango", "Ajax", "Poly", "Chelsey"];

// console.log( clients.indexOf('Poly') ); // 2
// console.log( clients.indexOf('Monkong') ); // -1

// const item = ['nata', 'olya', 'katya'];
// console.log(item.indexOf('nata'));
// console.log(item.indexOf('n'));
// console.log(item.includes('nata'));
// console.log(item.includes('kjhkj'));

// 5.
// const massive = [];
// massive.push(35);
// massive.push(99);
// massive.push(58);
// massive.unshift(11);
// massive.pop ();
// massive.shift();
// console.log(massive);


// // 6.
// const item = ['nata', 'olya', 'katya'];
// item.push('rada');
// console.log(item);
// let newItem = ( item.slice(1, 3) );
// console.log(newItem);
// console.log(item);

// 7. удаление элементов, замена элементов
// const item = ['nata', 'olya', 'katya'];
// item.push('rada');
// item.push('lida');
// console.log(item);
// item.splice(1, 3);
// console.log(item);
// item.splice(1, 0, 'sasha')
// console.log(item);
// item.splice(2, 1, 'anya','rita');
// console.log(item);
// item.splice(1,1,'roma');
// console.log(item);


// 8. ссоединение элементов
// const item = ['nata', 'olya', 'katya', 'rada', 'lida'];
// const newItem = ['roma', 'yulya'];
// const mass = item.concat(newItem);
// console.log('mass', mass);


9.

const item = ['nata', 'olya', 'katya', 'rada', 'lida'];
const newItem = ['roma', 'yulya'];
const mass = item.concat(newItem);
console.log('mass', mass);
console.log( Array.isArray(mass) );
console.log(mass.reverse());
