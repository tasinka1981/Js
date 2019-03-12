"use strict";
// let title = document.createElement('h2');
// title.classList.add('red-text');
// title.textContent = 'Hello';
// let div = document.querySelector('.first');
// div.append(title);
// div.innerHTML += '<ul class="myList"><li><p>ockjhkj</p></li><li><p>dfgdfgdf</p></li></ul>';
// let myList = document.querySelector('.myList');
// myList.style.listStyle = 'none';
// myList.style.color = 'blue';

// div.insertAdjacentHTML('beforebegin', '<h3>Привет</h3>');
// let text = document.querySelector('h3');
// text.classList.add('green');
// let textGreen = document.querySelector('.green');
// textGreen.style.color = 'green';

// let image = document.createElement('img');
// image.src = 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj39KPprvrgAhWnwMQBHXrLAJQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.nmfnewsonline.com%2Flifestyle%2Fnature-plays-a-great-role-in-maintaining-body-s-health-says-study-2664.html&psig=AOvVaw1wpjTL_sXQJjE-9-bpg_sU&ust=1552403090771376';
// div.append(image);
// image.classList.add('img-style');
// image.style.display = 'block';
// image.style.margin = 'auto';
// image.style.backgroundColor = 'aqua';
// image.style.padding = '20px';

//=====================================================================
// Дополнительные задание 1

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// const items = document.querySelectorAll('.categories >li');
// items.forEach(item => console.log(`${item.firstChild.textContent} Length: ${item.childNodes[1].childElementCount}`));//вариант 1
// items.forEach(item => console.log(`${item.firstChild.textContent} Length: ${item.children[0].children.length}`));//вариант2
//=========================================================================================================================================================
// Дополнительные задание 2
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const list = document.querySelector('.list');
// list.firstElementChild.style.color = ('red');
// list.lastElementChild.style.color = ('blue');
//=========================================================================================================================================================
// Дополнительные задание 3
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');
// const mark = elements.reduce((string, i)=> string + `<li>${i}</li>`,"" );
// list.innerHTML = mark;
//=========================================================================================================================================================
// Дополнительные задание 4

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/
// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];

// const gallery = document.querySelector('.gallery');
// const image = document.createElement('img');
// const mark = galleryItems.reduce((pic,i)=> pic + `<li><img class='sizes' src=${i.url} alt=${i.alt}></li>`,"");
// gallery.innerHTML = mark;
// const sizes = document.querySelectorAll('.sizes');
// sizes.forEach(i => i.style.width = '300px');
// gallery.style.listStyle = 'none';

//===================================================================================================================================================
/*
// Дополнительные задание 5
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// let arrChecked = document.querySelectorAll('input:checked');
// console.log(arrChecked);

// function collectInputData(inputs) {
//     let ArrValue = inputs.map(item => item.value);
//     return ArrValue;

// }
// console.log(collectInputData(Array.from(arrChecked)));

//====================================================================
// Дополнительные задание 6
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// 1-й вариант(вставляем код целиком)
// function createMovieCard() {
//     let movie = document.querySelector('.movie');

//     const text = `<div class="movie">
//     <img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">

//     <div class="movie__body">
//       <h2 class="movie__title">The Godfather</h2>
//       <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
//         would-be killers, launching a campaign of bloody revenge.</p>

//       <p class="movie__date">Released: 1972-03-14</p>
//       <p class="movie__rating">Rating: 8.6</p>
//     </div>
//   </div> -->`
//   movie.innerHTML = text;
// }
// createMovieCard();

// 2-вариант(вставляем отдельные эллементы)
// function createMovieCard() {
//     let movie = document.querySelector('.movie');

//     let elem = document.createElement('img');
//     elem.classList.add('movie__image');
//     elem.src='http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
//     elem.alt='movie image';

//     let elemTextContainer = document.createElement('div');
//     let textMain = document.createElement('h2');
//     textMain.classList.add('movie__title')
//     let textP1 = document.createElement('p');
//     textP1.classList.add('movie__description')
//     let textP2 = document.createElement('p');
//     textP2.classList.add('movie__date')
//     let textP3 = document.createElement('p');
//     textP3.classList.add('movie__rating');

//     textMain.textContent = 'The Godfather';
//     textP1.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
//     textP2.textContent = 'Released: 1972-03-14';
//     textP3.textContent = 'Rating: 8.6';
//     elemTextContainer.append(textMain,textP1,textP2,textP3);
//     movie.append(elem, elemTextContainer);

// }
// createMovieCard();
//====================================================================
// Дополнительные задание 7
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
// function randomColor() {
//     let result = '';
//      let max = 255;    
// let a = Math.floor(Math.random() * (max+1));
// let b = Math.floor(Math.random() * (max+1));
// let c = Math.floor(Math.random() * (max+1));
// return result = `rgb(${a}, ${b}, ${c})`
// }
// // console.log(randomColor());


// function createBoxes(num) {
//   let i = 1;
//   let conteiner = document.querySelector('#root');
//   let width = 30;
//   let height = 30;
//   do {
   
//     let div = document.createElement("div");
//     conteiner.append(div);
//     div.style.backgroundColor = randomColor();
//     div.style.width = width +'px';
//     div.style.height = height +'px';
//     i += 1;
//     width +=10;
//     height +=10;
//   } while (i <= num);
// }
// createBoxes(5);


