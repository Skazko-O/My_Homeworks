"use strict";

/* Мінмімум 2.Тобі потрібно зберігати ім’я та прізвище в змінній, 
придумай до 4-х імен змінних, що потрібні тобі для даної задачі. 
Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані)*/
var first_Name = "Sasha";
var age;
var f_Name;
var l_Name;
var lastName;
lastName = first_Name; // let 1Name
// let first name
// let first-name  
// let let
// let ім'я

/*Мінімум 3.Вкажи всі можливі способи коментування коду*/
// перший спосіб коментування коду

/* другий спосіб коментування коду*/

/*Мінімум 4.Стилі написання імен змінних*/

var secName; //camelCase

var UserProfile; //PascalCase

var firs_name; //snake_case

var FNAME; //UPER_CASE

/*Норма: 1.Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”*/

function askName() {
  var first_Name = prompt('Як тебе звати?', '');
  alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(first_Name));
}

var username = document.getElementById('username').value;
var greetingText = "Hello, <b>".concat(username, "</b>");
document.getElementById("rez_1").innerHTML = greetingText;
/*Норма: 2.Запитай рік народження користувача, порахуй його/її вік і виведи результат. 
Поточний рік вкажи в коді як константу;*/

function askAge() {
  var age = prompt('Який рік твого народження?');
  var currentYear = 2025;
  var yourAge = currentYear - age;
  alert("\u0422\u043E\u0431\u0456 ".concat(yourAge));
}
/*Норма 3.Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата*/


function askP() {
  var squareSide = prompt('Напиши довжину сторони квадрату в см.');
  var perSquare = 4 * squareSide;
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(perSquare, " \u0441\u043C."));
}
/*Максимум 1.Запитай у користувача радіус кола і виведи площу такої окружності.*/


function askR() {
  var radius = prompt('Напиши радіус кола в см., я зможу порахувати площу кола');
  var Pi = Math.PI;
  var sCircle = Pi * Math.pow(radius, 2);
  alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 = ".concat(sCircle.toFixed(2), " \u0441\u043C\xB2"));
}
/*Максимум 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/


function askDistance() {
  var distance = prompt('Напиши відстань в кілометрах між двома містами');
  var timeTo = prompt('За скільки годин хочеш дістатись?');
  var speed = distance / timeTo;
  alert("\u0422\u043E\u0431\u0456 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044C \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(speed, " \u043A\u043C/\u0433\u043E\u0434"));
}
/*Максимум 3.Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. 
Курс валют зберігається в константі.*/


function convertCurrency() {
  var currencyUSD = prompt('Напиши, скільки долларів бажаєшь конвертувати в евро');
  var exchangeSellUAH = 41.35;
  var exchangeBuyEUR = 49.5;
  var currencyEUR = currencyUSD * exchangeSellUAH / exchangeBuyEUR;
  alert("".concat(currencyUSD, " \u0434\u043E\u043B\u043B\u0430\u0440\u0456\u0432 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(currencyEUR.toFixed(2), " \u0435\u0432\u0440\u043E"));
}
/* Перевірка пароля */


function checkPassword() {
  var user = prompt("Who's there?");

  if (user === "Admin") {
    var password = prompt("Password?");

    if (password === "TheMaster") {
      alert("Welcome!");
    } else if (password === null) {
      alert("Cenceled");
    } else alert("Wrong password");
  } else if (user === null) {
    alert("Canceled");
  } else alert("I don't know you");
}
/* Виводимо парні числа */


function parniChusla() {
  for (var i = 0; i <= 10; ++i) {
    if (i % 2 === 0) {
      alert(i);
    }
  }
}