'use strict'
let title = document.createElement('h2');
title.classList.add('red-text');
title.textContent = 'Hello';
let div = document.querySelector('.first');
div.append(title);
div.innerHTML += '<ul class="myList"><li><p>ockjhkj</p></li><li><p>dfgdfgdf</p></li></ul>';
let myList = document.querySelector('.myList');
myList.style.listStyle = 'none';
myList.style.color = 'blue';

div.insertAdjacentHTML('beforebegin', '<h3>Привет</h3>');
let text = document.querySelector('h3');
text.classList.add('green');
let textGreen = document.querySelector('.green');
textGreen.style.color = 'green';

let image = document.createElement('img');
image.src = 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj39KPprvrgAhWnwMQBHXrLAJQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.nmfnewsonline.com%2Flifestyle%2Fnature-plays-a-great-role-in-maintaining-body-s-health-says-study-2664.html&psig=AOvVaw1wpjTL_sXQJjE-9-bpg_sU&ust=1552403090771376';
div.append(image);
image.classList.add('img-style');
image.style.display = 'block';
image.style.margin = 'auto';
image.style.backgroundColor = 'aqua';
image.style.padding = '20px';
