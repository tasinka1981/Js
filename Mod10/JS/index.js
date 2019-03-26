// let timeZone = document.querySelector(".location-timezone");
// let temperatureDegree = document.querySelector(".temperature-degree");
// let temperatureDescription = document.querySelector(".temperature-description");
// let iconId = document.querySelector(".icon");
// let currentlyDate = document.querySelector(".date");
// let celsij = document.querySelector(".common");
// let unit = document.querySelector(".span");
// let cels;
// let tempBuff;
// let onLoad = () => {
//   let lat;
//   let long;

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       console.log(navigator.geolocation);
//       console.log(position);
//       lat = position.coords.latitude;
//       long = position.coords.longitude;
//       let proxy = "https://cors-anywhere.herokuapp.com/";
//       let api = `${proxy}https://api.darksky.net/forecast/fe47be54b85d8956243afe4e52dc7202/${lat},${long}`;
//       fetch(api)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);

//           const { icon, summary, temperature } = data.currently;
//           temperatureDegree.textContent = temperature;
//           temperatureDescription.textContent = summary;
//           timeZone.textContent = data.timezone;
//           cels = 5/9*(temperature-32);
//           tempBuff = temperature;
//           setIcon(icon, iconId);
//           celsij.addEventListener('click', setTemperature);
//         });
//     });
//   }
//   function setTemperature(){
//     if(unit.textContent === 'F'){
//       unit.textContent = 'C';
//       temperatureDegree.textContent = Math.floor(cels);
//     }else {
//       unit.textContent = 'F';
//       temperatureDegree.textContent = tempBuff;
//     }}
//   function setIcon(icon, iconId) {
//     const skycons = new Skycons({ color: "white" });
//     const currentIcon = icon.replace(/-/g, "_").toUpperCase();
//     skycons.play();
//     console.log(currentIcon);
//     return skycons.set(iconId, Skycons[currentIcon]);
//   }

// };

// window.addEventListener("load", onLoad);

//=======================================================================================
// Дополнительные задания
// Зад 1
/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// /*
//   @param {FormEvent} evt
// */
// function fetchCountryData(evt) {
//     evt.preventDefault();
//     let API_URL = `https://restcountries.eu/rest/v2/name/${input.value}?fullText=true`;
//     fetch(API_URL)
//     .then(response => {
//         if (response.ok) return response.json();
//         throw new Error("Error fetching data");
//     })
//     .then (data => {
//         console.log(data);
//         result.innerHTML = `<p>Country name:${data[0].name}</p><p>Capital: ${data[0].capital}</p><p>Main currency: ${data[0].currencies[0].code}</p><p>Flag: <img style="width:300px" src="${data[0].flag}"></p>`;
//     })

//         .catch(
//             result.innerHTML = "Такой страны нет");

// }

// form.addEventListener("submit", fetchCountryData);
//================================================================

// Зад 2

/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// /*
//   @param {FormEvent} evt
// */
// function fetchUserData(evt) {
//   evt.preventDefault();
//   let API_URL = `https://api.github.com/users/${input.value}`;
//   fetch(API_URL)
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error("Error fetching data");
//     })
//     .then(data => {
//       console.log(data);
//       result.innerHTML = `<p>Avatar: <img style=width:200px src = ${data.avatar_url}></p><p>Username: ${data.login}</p><p>Bio: ${data.bio}</p><p>Public repos: ${data.public_repos}</p>`;
//     });
// }
// form.addEventListener("submit", fetchUserData);
