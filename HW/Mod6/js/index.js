"use strict";

// // ДОМАШНЕЕ ЗАДАНИЕ

// /*
//   Сеть фастфудов предлагает несколько видов гамбургеров.
//   Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
// 	- маленькая (+30 денег, +50 калорий)
// 	- большая (+50 денег, +100 калорий)
//   Гамбургер может быть с одной из нескольких видов начинок (обязательно):
// 	- сыром (+15 денег, +20 калорий)
// 	- салатом (+20 денег, +5 калорий)
// 	- мясом (+35 денег, +15 калорий)
//   Дополнительно, гамбургер можно:
// 	- посыпать приправой (+10 денег, +0 калорий)
// 	- полить соусом (+15 денег, +5 калорий)
//   Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
//   создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
//   Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
//   указанные методы, которые принимают и возвращают данные указанного типа.
// */

// /**
//  * Класс, объекты которого описывают параметры гамбургера.
//  */
// class Hamburger {
//   /**
//    * @constructor
//    * @param {String} size - Размер
//    * @param {String} stuffing - Начинка
//    */
//   constructor(size, stuffing) {
//     this._size = size;
//     this._stuffing = stuffing;
//     this._toppings = [];
//   }

//   /**
//    * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
//    * @param {String} topping - Тип добавки
//    */
// addTopping(topping) {
//
// }

//   /**
//    * Убрать topping, при условии, что она ранее была добавлена
//    * @param {String} topping - Тип добавки
//    */
// removeTopping(topping) {
//
// }

//   /**
//    * Получить список toppings
//    * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
//    */
// getToppings() {
//
// }

//   /**
//    * Узнать размер гамбургера
//    * @returns {String} - размер гамбургера
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
//    */
// getSize() {
//
// }

//   /**
//    * Узнать начинку гамбургера
//    * @returns {String} - начинка гамбургера
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
//    */
// getStuffing() {
//   ;
// }

//   /**
//    * Узнать цену гамбургера
//    * @returns {Number} - Цена в деньгах
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
//    */
// calculatePrice() {
//
// }
//
//   /**
//    * Узнать калорийность
//    * @returns {Number} - Калорийность в калориях
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
//    */
//   calculateCalories() {
//
//   }
// }

// /*
//     Размеры, виды добавок и начинок объявите как статические поля класса.
//     Добавьте отсутсвующие поля по аналогии с примером.
//   */
// Hamburger.SIZE_SMALL = "SIZE_SMALL";
// Hamburger.SIZE_LARGE = "SIZE_LARGE";

// Hamburger.SIZES = {
//   [Hamburger.SIZE_SMALL]: {
//     price: 30,
//     calories: 50
//   },
//   [Hamburger.SIZE_LARGE]: {
//     price: 50,
//     calories: 100
//   }
// };

// Hamburger.STUFFING_CHEESE = "STUFFING_CHEESE";
// Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
// Hamburger.STUFFING_MEAT = "STUFFING_MEAT";

// Hamburger.STUFFINGS = {
//   [Hamburger.STUFFING_CHEESE]: {
//     price: 15,
//     calories: 20
//   },
//   [Hamburger.STUFFING_SALAD]: {
//     price: 20,
//     calories: 5
//   },
//   [Hamburger.STUFFING_MEAT]: {
//     price: 35,
//     calories: 15
//   }
// };

// Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
// Hamburger.TOPPING_SAUCE = "TOPPING_SAUSE";

// Hamburger.TOPPINGS = {
//   [Hamburger.TOPPING_SPICE]: {
//     price: 10,
//     calories: 0
//   },
//   [Hamburger.TOPPING_SAUSE]: {
//     price: 15,
//     calories: 5
//   }
// };

class Hamburger {
  /**
   * @constructor
   * @param {String} size - Размер
   * @param {String} stuffing - Начинка
   */
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  addTopping(topping) {
    if (this._toppings.includes(topping)) {
      console.log("такой топинг уже есть в гамбургере");
    } else {
      this._toppings.push(topping);
    }
  }
  removeTopping(topping) {
    if (this._toppings.includes(topping)) {
      this._toppings.splice(this._toppings.indexOf(topping), 1);
    } else {
      console.log("такого топинга нет");
    }
  }
  getToppings() {
    return this._toppings;
  }
  getSize() {
    return this._size;
  }
  getStuffing() {
    return this._stuffing;
  }
  calculatePrice() {
    let totalPrice = 0;
    let summTopping = 0;
    for (let key of this._toppings) {
      summTopping = summTopping + Hamburger.TOPPINGS[key].price;
    }

    totalPrice =
      Hamburger.SIZES[this._size].price +
      Hamburger.STUFFINGS[this._stuffing].price +
      summTopping;
    return totalPrice;
  }
  calculateCalories() {
    let totalCalor = 0;
    let summ = 0;
    for (let key of this._toppings) {
      summ += Hamburger.TOPPINGS[key].calories;
    }
    totalCalor =
      Hamburger.SIZES[this._size].calories +
      Hamburger.STUFFINGS[this._stuffing].calories +
      summ;
    return totalCalor;
  }
}

Hamburger.SIZE_SMALL = "SIZE_SMALL";
Hamburger.SIZE_LARGE = "SIZE_LARGE";

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100
  }
};

Hamburger.STUFFING_CHEESE = "STUFFING_CHEESE";
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_MEAT = "STUFFING_MEAT";

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15
  }
};

Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5
  }
};

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);
// / // Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger); //проверка на добавление такого же соуса
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(hamburger); //проверка на добавление другого соуса

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log(
  "Is hamburger large: ",
  hamburger.getSize() === Hamburger.SIZE_LARGE
); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1


