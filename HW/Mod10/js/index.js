/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
const btnGet = document.querySelector(".btn-get");
const btnGetById = document.querySelector(".btn-getById");
const btnAdd = document.querySelector(".btn-add");
const btnRemove = document.querySelector(".btn-remove");
const btnUpdate = document.querySelector(".btn-update");
const resultGet = document.querySelector(".result-get");
const resultGetById = document.querySelector(".result-getById");
const userId = document.querySelector(".user-id");
const userNameAdd = document.querySelector(".user-name");
const userAgeAdd = document.querySelector(".user-age");
const resultAdd = document.querySelector(".result-add");
const resultRemove = document.querySelector(".result-remove");
const userIdRemove = document.querySelector(".user-id-remove");
const userIdUpdate = document.querySelector(".user-id-update");
const userNameUpdate = document.querySelector(".user-name-update");
const userAgeUpdate = document.querySelector(".user-age-update");
const resultUpdate = document.querySelector(".result-update");

let isClick = false;
function getAllUsers(evt) {
  resultGet.classList.remove("hidden");

  evt.preventDefault();
  let API = "https://test-users-api.herokuapp.com/users/";
  fetch(API)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error");
    })
    .then(data => {
      console.log(data);

      data.data.forEach(item => {
        console.log(item);
        resultGet.innerHTML += `<div class="result-item"> <p><span>ID:</span> ${
          item.id
        }</p><p><span>Name:</span>${item.name}</p><p><span>Age:</span>${
          item.age
        }</p></div>`;
      });
    })
    .catch(err => console.error("Error:", err));
}
function hideUser() {
  resultGet.classList.add("hidden");
}
btnGet.addEventListener("click", getAllUsers);
btnGet.addEventListener("blur", hideUser);

function getUserById(evt) {
  resultGetById.classList.remove("hidden");
  evt.preventDefault();
  let API = `https://test-users-api.herokuapp.com/users/${userId.value}`;
  fetch(API)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      console.log(data);
      resultGetById.innerHTML = `<div class="result-item"> <p><span>ID:</span> ${
        data.data.id
      }</p><p><span>Name:</span>${data.data.name}</p><p><span>Age:</span>${
        data.data.age
      }</p></div>`;
    })
    .catch(err => console.error("Error:", err));
}
function hideUserById() {
  resultGetById.classList.add("hidden");
  userId.value = "";
}
btnGetById.addEventListener("click", getUserById);
btnGetById.addEventListener("blur", hideUserById);

function addUser(evt) {
  evt.preventDefault();
  let item = { name: userNameAdd.value, age: userAgeAdd.value };
  
  resultAdd.classList.remove("hidden");
  let API = "https://test-users-api.herokuapp.com/users/";
  fetch(API, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      console.log(data);
      resultAdd.innerHTML = `<div class="result-item"> <p><span>ID:</span> ${
        data.data._id
      }</p><p><span>Name:</span>${data.data.name}</p><p><span>Age:</span>${
        data.data.age
      }</p></div>`;
    })
    .catch(err => console.error("ERror:", err));
}
function hideAddUser() {
  resultAdd.classList.add("hidden");
  userNameAdd.value = "";
  userAgeAdd.value = "";
}
btnAdd.addEventListener("click", addUser);
btnAdd.addEventListener("blur", hideAddUser);

function removeUser(evt) {
  evt.preventDefault();
  resultRemove.classList.remove("hidden");
  let API = `https://test-users-api.herokuapp.com/users/${userIdRemove.value}`;
  fetch(API, {
    method: "DELETE"
  })
    .then(() => {
      console.log("success");
      resultRemove.innerHTML = `<div class="result-item"> <p><span>SUCCESS</span> </p></div>`;
    })
    .catch(err => {
      console.error("ERror:", err);
      resultRemove.innerHTML = `<div class="result-item"> <p><span>Такого ID не существует</span> </p></div>`;
    });
}
function hideRemoveUser() {
  resultRemove.classList.add("hidden");
  userIdRemove.value = "";
}

btnRemove.addEventListener("click", removeUser);
btnRemove.addEventListener("blur", hideRemoveUser);


function updateUser(evt) {
  resultUpdate.classList.remove("hidden");
  evt.preventDefault();
  let item = { name: userNameUpdate.value, age: userAgeUpdate.value };
  let API = `https://test-users-api.herokuapp.com/users/${userIdUpdate.value}`;
  fetch(API, {
    method: "PUT",
    body: JSON.stringify(item),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {console.log(data);
      resultUpdate.innerHTML = `<div class="result-item"> <p><span>ID:</span> ${
        data.data.id
      }</p><p><span>Name:</span>${data.data.name}</p><p><span>Age:</span>${
        data.data.age
      }</p></div>`;})
    .catch(err => console.error('error:', err))
}

function hideUpdateUser() {
  resultUpdate.classList.add("hidden");
  userNameUpdate.value = "";
  userAgeUpdate.value = "";
  userIdUpdate.value = "";
}

btnUpdate.addEventListener("click", updateUser);
btnUpdate.addEventListener("blur", hideUpdateUser);
