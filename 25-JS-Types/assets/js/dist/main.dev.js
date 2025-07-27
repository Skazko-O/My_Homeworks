"use strict";

/* Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.*/
function suma() {
  var element1 = document.getElementById('element1').value;
  var element2 = document.getElementById('element2').value;
  var suma_2_chisel = parseFloat(element1.replace(",", ".")) + parseFloat(element2.replace(",", "."));
  document.getElementById('rez_1').innerHTML = suma_2_chisel ? "\u0421\u0443\u043C\u0430 = <b>".concat(Number(suma_2_chisel.toFixed(2)), "</b>") : '<span style="color: red">Введіть числа</span>';
}
/*Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.*/


function suma_text() {
  var elementText = document.getElementById('elementText').value;
  var elementChislo = document.getElementById('elementChislo').value;
  var suma_tex_i_chislo = parseInt(elementText) + parseInt(elementChislo);
  document.getElementById('rez_2').innerHTML = suma_tex_i_chislo ? "\u0421\u0443\u043C\u0430 = <b>".concat(suma_tex_i_chislo, "</b>") : '<span style="color: red">Введіть числа</span>';
}
/*Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.*/


function calc_file() {
  var Gb = document.getElementById('Gb').value;
  var fileSizeMB = 820;
  var file = Math.floor(Gb * 1024 / fileSizeMB);
  document.getElementById('rez_3').innerHTML = file ? "<b>".concat(file, " \u0444\u0430\u0439\u043B(\u0456\u0432)!</b>") : '<span style="color: red">Введіть обсяг флешки (тільки число)</span>';
}
/*Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/


function chocolate() {
  var sumInput = document.getElementById('sumInput').value.replace(",", ".");
  var priceInput = document.getElementById('priceInput').value.replace(",", ".");
  var wallet = parseFloat(sumInput);
  var price = parseFloat(priceInput);
  var chocoQ = Math.floor(wallet / price);
  var rest = (wallet - chocoQ * price).toFixed(2);
  document.getElementById('rez_4').innerHTML = "\u041C\u043E\u0436\u043D\u0430 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(chocoQ, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0438 (-\u043A\u0443 -\u043E\u043A) \u0456 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F ").concat(rest, " \u0433\u0440\u043D.");
}
/*Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).*/


function chislo() {
  var chisloInput = document.getElementById('chisloInput').value;
  var num = parseInt(chisloInput);
  var digit1 = num % 10;
  var digit2 = Math.floor(num % 100 / 10);
  var digit3 = Math.floor(num / 100);
  var reversed = "".concat(digit1).concat(digit2).concat(digit3);
  document.getElementById('rez_5').innerText = "".concat(reversed);
}
/*Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.*/


function bank() {
  var sumVkladInput = document.getElementById('sumVkladInput').value.replace(",", ".");
  var sum = parseFloat(sumVkladInput);
  var months = 2; //термін вкладу в місяцях

  var stavka = 5; //ставка відсоток річних

  var sumNarahVidsotkiv = (stavka / 12 * sum / 100 * months).toFixed(2);
  document.getElementById('rez_6').innerText = "\u0421\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 ".concat(sumNarahVidsotkiv, " \u0433\u0440\u043D.");
}