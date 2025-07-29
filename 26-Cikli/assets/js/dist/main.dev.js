"use strict";

/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/
function age() {
  var vik = Number(document.getElementById('vik').value.replace(",", "."));

  if (isNaN(vik) || vik < 0 || vik == "") {
    document.getElementById('rez_1').innerText = 'Ви вели невірні данні';
    return;
  } else if (vik >= 0 && vik < 12) {
    document.getElementById('rez_1').innerText = 'Ви дитина';
  } else if (vik >= 12 && vik < 18) {
    document.getElementById('rez_1').innerText = 'Ви підліток';
  } else if (vik >= 18 && vik < 60) {
    document.getElementById('rez_1').innerText = 'Ви дорослий';
  } else if (vik >= 60 && vik < 123) {
    document.getElementById('rez_1').innerText = 'Ви є пенсіонером';
  } else {
    document.getElementById('rez_1').innerText = 'Ще раз перевір свідоцтво про народження, це новий рекорд!!';
  }
}
/* Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д). */


function chislo() {
  var cifra = document.getElementById("cifra").value;
  var text = "Символ: ";

  if (isNaN(cifra) || cifra == "") {
    document.getElementById('rez_2').innerText = 'Ви вели невірні данні';
    return;
  }

  switch (+cifra) {
    case 0:
      document.getElementById('rez_2').innerText = "".concat(text, " )");
      break;

    case 1:
      document.getElementById('rez_2').innerText = "".concat(text, " !");
      break;

    case 2:
      document.getElementById('rez_2').innerText = "".concat(text, " @");
      break;

    case 3:
      document.getElementById('rez_2').innerText = "".concat(text, " #");
      break;

    case 4:
      document.getElementById('rez_2').innerText = "".concat(text, " $");
      break;

    case 5:
      document.getElementById('rez_2').innerText = "".concat(text, " %");
      break;

    case 6:
      document.getElementById('rez_2').innerText = "".concat(text, " ^");
      break;

    case 7:
      document.getElementById('rez_2').innerText = "".concat(text, " &");
      break;

    case 8:
      document.getElementById('rez_2').innerText = "".concat(text, " *");
      break;

    case 9:
      document.getElementById('rez_2').innerText = "".concat(text, " (");
      break;

    default:
      document.getElementById('rez_2').innerText = "\u041D\u0435\u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F. \u0422\u0456\u043B\u044C\u043A\u0438 \u0432\u0456\u0434 0 \u0434\u043E 9";
  }
}
/*Підрахуй суму всіх чисел в заданому користувачем діапазоні.*/


function sumaDiapozon() {
  var chislo1 = parseInt(document.getElementById('chislo1').value);
  var chislo2 = parseInt(document.getElementById('chislo2').value);
  var sum = 0;
  var min = Math.min(chislo1, chislo2);
  var max = Math.max(chislo1, chislo2);

  for (var i = min; i <= max; i++) {
    sum += i;
  }

  document.getElementById('rez_3').innerText = "\u0421\u0443\u043C\u0430: ".concat(sum);
}
/*Запитай у користувача 2 числа і знайди найбільший спільний дільник.*/


function spilniDilnik() {
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);
  /*для знаходження НСД використовуємо алгортм Евкліда*/

  while (b !== 0) {
    var temp = a % b;
    a = b;
    b = temp;
  }

  document.getElementById('rez_4').innerText = "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A: ".concat(a);
}
/*Запитай у користувача число і виведи всі дільники цього числа.*/


function dilniki() {
  var a1 = parseInt(document.getElementById('a1').value);

  if (isNaN(a1) || a1 == "") {
    document.getElementById('rez_5').innerText = 'Ви вели невірні данні';
    return;
  } else {
    var result = "";

    for (var i = 1; i <= Math.abs(a1); i++) {
      if (a1 % i == 0) {
        result += i + ", ";
      }
    }

    document.getElementById('rez_5').innerText = "\u0412\u0441\u0456 \u0434\u0456\u043B\u044C\u043D\u0438\u043A\u0438 \u0447\u0438\u0441\u043B\u0430: ".concat(result);
  }
}
/* Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом. */

/* Розклав число в масив і порівняв елементи 1=5 і 2=4 (звісно в масиві з 0 рахуємо)*/

/*Зробив цікаву перевірку на довжину числа яке ввів користувач, окрім тих перевірок, що вже були*/


function palindrom() {
  var a5 = parseInt(document.getElementById('a5').value);

  if (isNaN(a5) || a5 == "" || String(a5).length !== 5) {
    document.getElementById('rez_6').innerText = 'Ви вели невірні данні';
    return;
  }

  digit = String(a5).split("");

  if (digit[0] === digit[4] && digit[1] === digit[3]) {
    document.getElementById('rez_6').innerText = 'Це паліндром!';
  } else {
    document.getElementById('rez_6').innerText = 'Звичайне число';
  }
}
/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:*/


function discaunt() {
  var sumaPocypcu = Number(document.getElementById('sumaPocypcu').value.replace(",", "."));
  sumaDoSplati = 0;
  znijka = 0;

  if (isNaN(sumaPocypcu) || sumaPocypcu < 0 || sumaPocypcu == "") {
    document.getElementById('rez_7').innerText = 'Ви вели невірні данні';
    return;
  }

  if (sumaPocypcu >= 200 && sumaPocypcu < 300) {
    znijka = 0.03 * sumaPocypcu;
  } else if (sumaPocypcu >= 300 && sumaPocypcu < 500) {
    znijka = 0.05 * sumaPocypcu;
  } else if (sumaPocypcu >= 500) {
    znijka = 0.07 * sumaPocypcu;
  }

  sumaDoSplati = sumaPocypcu - znijka;
  document.getElementById('rez_7').innerText = "\u0421\u0443\u043C\u0430 \u0434\u043E \u0441\u043F\u043B\u0430\u0442\u0438: ".concat(sumaDoSplati.toFixed(2), " \u0433\u0440\u043D.");
}
/*Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
При цьому також порахуй, скільки з них парних і непарних. 
Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем. */


function countNumbers() {
  var numbersArray = [];
  var n = 10; //кількість ітерацій

  for (var i = 0; i < n; i++) {
    var input = prompt("\u0412\u0432\u0435\u0434\u0438 \u0434\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E. \u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u0432\u0432\u0435\u0441\u0442\u0438 ".concat(n - i, " \u0447\u0438\u0441\u0435\u043B"));

    if (isNaN(input) || input.trim() == "" || input == null) {
      alert('Ви вели невірні данні. Спробуйте ще раз');
      i--;
      continue;
    }

    numbersArray.push(Number(input));
  }

  var zeroCount = numbersArray.filter(function (num) {
    return num === 0;
  }).length;
  var positiveCount = numbersArray.filter(function (num) {
    return num > 0;
  }).length;
  var negativeCount = numbersArray.filter(function (num) {
    return num < 0;
  }).length;
  var evenCount = numbersArray.filter(function (num) {
    return num != 0 && num % 2 == 0;
  }).length;
  var oddCount = numbersArray.filter(function (num) {
    return num % 2 != 0;
  }).length;
  document.getElementById('rez_8').innerText = "\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u0442\u0430\u043A\u0456 \u0447\u0438\u0441\u043B\u0430: (".concat(numbersArray, ") \u0437 \u043D\u0438\u0445\n    ").concat(positiveCount, " \u0434\u043E\u0434\u0430\u0442\u043D\u0456, ").concat(negativeCount, " \u0432\u0456\u0434\u2019\u0454\u043C\u043D\u0456, ").concat(zeroCount, " \u043D\u0443\u043B\u0456\u0432, ").concat(evenCount, " \u043F\u0430\u0440\u043D\u0438\u0445 \u0456 ").concat(oddCount, " \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u0445");
}
/*Зацикли відображення днів тижня таким чином: «День тижня. 
Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.*/


function daysWeek() {
  var weekDay = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота', 'Неділя'];
  var i = 0;

  do {
    alert("".concat(weekDay[i], "\n\u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"));
    i = (i + 1) % weekDay.length;
  } while (confirm("Натисно ОК якщо хочеш дізнатись, або скасуй натисни Cancel"));
}
/* Гра "Вгадай число" */


function gameGuessNumber() {
  var numbers = [];

  for (var i = 0; i <= 100; i++) {
    numbers.push(i);
  }

  var Q; //оголошуємо як глобальну змінну

  var N;

  do {
    //знаходимо середину масиву
    var sum = numbers.reduce(function (acc, val) {
      return acc + val;
    }, 0); //Сумуємо всі значення масиву за доп. метода reduce acc - акумулює значення, val додає поточне значення. 0 - початкове значення acc

    N = Math.round(sum / numbers.length); // дізнаємось середину масива = сума всіх значень ділимо на довжину (кількість елементів в масиві)

    Q = prompt("\u0427\u0438\u0441\u043B\u043E \u044F\u043A\u0435 \u0442\u0438 \u0437\u0430\u0433\u0430\u0434\u0430\u0432 = ".concat(N, "? \u0412\u0432\u0435\u0434\u0438 '=', '>' \u0430\u0431\u043E '<'"));

    if (Q == null) {
      alert("Ви вийшли з гри!");
      return;
    }

    Q = Q.trim(); // обрізаємо можливі пробіли задля

    if (Q == ">") {
      numbers = numbers.slice(numbers.indexOf(N) + 1); //метод slice повертає частину масива з вказаного індекса. indexOf повертає індекс масива
    } else if (Q == "<") {
      numbers = numbers.slice(0, numbers.indexOf(N));
    }
  } while (Q != "=");

  alert("\u042F \u0432\u0433\u0430\u0434\u0430\u0432 \u0447\u0438\u0441\u043B\u043E. \u0426\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(N));
}