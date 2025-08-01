"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* Перевірка вводу числа! */
// function checkIfNumber (a=0, b=0, c=0) { // 
//     const a = parseFloat(document.getElementById("valueA").value);
//     const b = parseFloat(document.getElementById("valueB").value);
//     const c = parseFloat(document.getElementById("valueB").value);
//     if (isNaN(a) || isNaN(b) || isNaN(c)) {        
//         return;
//     }
//     return; 
// }

/*Створи функцію, яка буде виводити кількість переданих їй аргументів.*/
function countArguments() {
  return arguments.length;
}

function getResult_2() {
  var input = document.getElementById("arguments").value;
  var values = input.split(",").map(function (arg) {
    return arg.trim();
  }).filter(function (arg) {
    return arg !== "";
  });
  var count = countArguments.apply(void 0, _toConsumableArray(values));
  document.getElementById("rez_2").textContent = "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0456\u0432: ".concat(count);
}
/*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/


function comparTheNumber(a, b) {
  //Порівнюємо два чила
  return a < b ? -1 : a > b ? 1 : 0;
}

function getResult_3() {
  // Вводимо данні, перевіряємо і виводимо результат
  var a = parseFloat(document.getElementById("valueA").value);
  var b = parseFloat(document.getElementById("valueB").value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("rez_3").textContent = "Будь ласка введіть два числа";
    return;
  }

  var result = comparTheNumber(a, b);
  document.getElementById("rez_3").textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F: ".concat(result);
}
/* Напиши функцію, яка обчислює факторіал переданого їй числа. */


function calculateFactorial(n) {
  var result = 1;

  for (var i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

function getResult_4() {
  var n = parseInt(document.getElementById("factorial").value);

  if (isNaN(n) || n < 0) {
    document.getElementById("rez_4").textContent = "Будь ласка введіть натуральне число";
    return;
  }

  var result_4 = calculateFactorial(n);
  document.getElementById("rez_4").textContent = "\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B \u0447\u0438\u0441\u043B\u0430 ".concat(n, ": ").concat(result_4);
}
/*Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
   Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/


function createNumber(a, b, c) {
  return a * 100 + b * 10 + c;
}

function getResult_5() {
  var a = parseFloat(document.getElementById("figure1").value);
  var b = parseFloat(document.getElementById("figure2").value);
  var c = parseFloat(document.getElementById("figure3").value);

  if (isNaN(a) || isNaN(b) || isNaN(b)) {
    document.getElementById("rez_5").textContent = "Будь ласка введіть три цифри";
    return;
  }

  if (![a, b, c].every(function (num) {
    return num >= 0;
  })) {
    document.getElementById("rez_5").textContent = "Цифри тільки додатні або 0";
    return;
  }

  var result = createNumber(a, b, c);
  document.getElementById("rez_5").textContent = "\u0427\u0438\u0441\u043B\u043E: ".concat(result);
}
/* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */


function calcAreaOfRectangle(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
  return a * b;
}

function getResult_6() {
  var a = parseFloat(document.getElementById("sideA").value.replace(",", "."));
  var b = parseFloat(document.getElementById("sideB").value.replace(",", "."));

  if ([a, b].some(function (num) {
    return isNaN(num);
  })) {
    document.getElementById("rez_6").textContent = "Будь ласка введіть три числа";
    return;
  }

  if (![a, b].every(function (num) {
    return num > 0;
  })) {
    document.getElementById("rez_6").textContent = "Числа повинні бути більше нуля";
    return;
  }

  b = isNaN(b) ? a : b;
  var result = calcAreaOfRectangle(a, b);
  a !== b ? document.getElementById("rez_6").textContent = "\u041F\u043B\u043E\u0449\u0430 \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A\u0430 = ".concat(result, " \u0441\u043C\xB2") : document.getElementById("rez_6").textContent = "\u041F\u043B\u043E\u0449\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 = ".concat(result, " \u0441\u043C\xB2");
}
/*Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
 Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/


function checkPerfectNumber(n) {
  var arr = [];

  for (var i = 1; i < n; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }

  var sum = arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return sum == n;
}

function getResult_7() {
  var n = parseInt(document.getElementById("perfectNumber").value);

  if (isNaN(n) || n <= 0) {
    document.getElementById("rez_7").textContent = "Будь ласка, введи натуральне число";
    return;
  }

  var result = checkPerfectNumber(n);
  document.getElementById("rez_7").textContent = "\u0427\u0438\u0441\u043B\u043E ".concat(n, " ").concat(result ? "досконале число" : "не є досконалим");
}

function getResult_8() {
  var arr = [];
  var start = parseInt(document.getElementById("start").value);
  var finish = parseInt(document.getElementById("finish").value);

  if (isNaN(start) || isNaN(finish) || start <= 0 || finish <= 0) {
    document.getElementById("rez_8").textContent = "Будь ласка, введи натуральне число";
    return;
  }

  if (start > finish) {
    document.getElementById("rez_8").textContent = "\u041F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043C\u0435\u043D\u0448\u0435 \u043D\u0456\u0436 \u0434\u0440\u0443\u0433\u0435";
    return;
  }

  for (var i = start; i <= finish; i++) {
    arr.push(i);
  }

  var result = arr.filter(checkPerfectNumber);
  document.getElementById("rez_8").textContent = "\u0414\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0456 \u0447\u0438\u0441\u043B\u0430 - ".concat(result);
}