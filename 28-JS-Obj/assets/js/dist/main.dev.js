"use strict";

var car = {
  brand: 'Ford',
  model: 'Kuga',
  year: 2019,
  avgSpeed: 120,
  // км/год
  fuelTank: 55,
  // літрів
  avgFuelConsuption: 5.5,
  // літрів на 100 км. 
  drivers: ['Oleksandr', 'Inna'],
  showDetail: function showDetail() {
    var info = "          \n                <div><strong>\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A:</strong> ".concat(this.brand, "</div>\n                <div><strong>\u041C\u043E\u0434\u0435\u043B\u044C:</strong> ").concat(this.model, "</div>\n                <div><strong>\u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443:</strong> ").concat(this.year, "</div>\n                <div><strong>\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u043A\u043C/\u0433\u043E\u0434:</strong> ").concat(this.avgSpeed, "</div>\n                <div><strong>\u041E\u0431'\u0454\u043C \u043F\u0430\u043B\u0438\u0432\u043D\u043E\u0433\u043E \u0431\u0430\u043A\u0443 \u043B.:</strong> ").concat(this.fuelTank, "</div>\n                <div><strong>\u0412\u0438\u0442\u0440\u0430\u0442\u0430 \u043D\u0430 100 \u043A\u043C.:</strong> ").concat(this.avgFuelConsuption, " \u043B.</div>\n                <div><strong>\u0412\u043E\u0434\u0456\u0457:</strong> ").concat(this.drivers.join(", "), "</div>\n                ");
    document.getElementById("car-info").innerHTML = info;
  },
  addDriver: function addDriver(name) {
    this.drivers.push(name);
    return;
  },
  searchDriver: function searchDriver(name) {
    return this.drivers.includes(name);
  },
  calcFuel: function calcFuel(dist) {
    return this.avgFuelConsuption / 100 * dist;
  },
  calcTime: function calcTime(dist) {
    var time = dist / this.avgSpeed;
    var breakTime = Math.floor(time / 4);
    return time + breakTime;
  }
};
car.showDetail();

function addDriver() {
  var name = document.getElementById("driverInput").value;
  car.addDriver(name);
  car.showDetail();
}

function searchDriver() {
  var name = document.getElementById("driverInput").value;
  var found = car.searchDriver(name);
  document.getElementById("rez-search").textContent = found ? "Знайшли" : "Не знайшли";
}

function calcTimeFuel() {
  var dist = document.getElementById("kmInput").value;
  var rezFuel = car.calcFuel(dist).toFixed(2);
  var rezTime = car.calcTime(dist);
  var rezMin = (rezTime % 1 * 60).toFixed(2);
  document.getElementById("rez-calc").textContent = "\u0417\u0430 ".concat(Math.round(rezTime), " \u0433\u043E\u0434\u0438\u043D \u0456 ").concat(rezMin, " \u0445\u0432\u0438\u043B\u0438\u043D. \u0412\u0438\u0442\u0440\u0430\u0442\u0430 ").concat(rezFuel, " \u043B\u0456\u0442\u0440\u0456\u0432");
}
/* ГОДИННИК */


var clock = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  onScreen: function onScreen() {
    var now = new Date();

    var pad = function pad(num) {
      return String(num).padStart(2, '0');
    };

    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
    var currentTime = "<span>".concat(pad(this.hours), ":").concat(pad(this.minutes), ":").concat(pad(this.seconds), "</span>");
    document.getElementById("nowClock").innerHTML = currentTime;
  },
  addSeconds: function addSeconds(sec) {
    var totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + sec;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    this.minutes = Math.floor(totalSeconds % 3600 / 60);
    this.seconds = totalSeconds % 60;
  },
  addMinutes: function addMinutes(min) {
    this.addSeconds(min * 60);
  },
  addHours: function addHours(hour) {
    this.addSeconds(hour * 3600);
  }
};
clock.onScreen(); // setInterval(clock.onScreen, 1000);

function addTime() {
  var sec = parseInt(document.getElementById("addS").value) || 0;
  var min = parseInt(document.getElementById("addM").value) || 0;
  var hour = parseInt(document.getElementById("addH").value) || 0;
  clock.addHours(hour);
  clock.addMinutes(min);
  clock.addSeconds(sec);

  var pad = function pad(num) {
    return String(num).padStart(2, '0');
  };

  var modTime = "<span>".concat(pad(clock.hours), ":").concat(pad(clock.minutes), ":").concat(pad(clock.seconds), "</span>");
  document.getElementById("newClock").innerHTML = modTime;
}
/* ДРОБИ */


var a = {
  numerator: 0,
  denominator: 0
};
var b = {
  numerator: 0,
  denominator: 0
};
var Fraction = {
  simplify: function simplify(numerator, denominator) {
    function nsd(a, b) {
      return b === 0 ? a : nsd(b, a % b);
    }

    var divisor = nsd(numerator, denominator);
    return {
      numerator: numerator / divisor,
      denominator: denominator / divisor
    };
  },
  sum: function sum(a, b) {
    var numerator = a.numerator * b.denominator + b.numerator * a.denominator;
    var denominator = a.denominator * b.denominator;
    return this.simplify(numerator, denominator);
  },
  subtraction: function subtraction(a, b) {
    var numerator = a.numerator * b.denominator - b.numerator * a.denominator;
    var denominator = a.denominator * b.denominator;
    return this.simplify(numerator, denominator);
  },
  multiplication: function multiplication(a, b) {
    var numerator = a.numerator * b.numerator;
    var denominator = a.denominator * b.denominator;
    return this.simplify(numerator, denominator);
  },
  division: function division(a, b) {
    var numerator = a.numerator * b.denominator;
    var denominator = a.denominator * b.numerator;
    return this.simplify(numerator, denominator);
  }
};

function operation(operation) {
  var a = {
    numerator: parseInt(document.getElementById('a-numerator').value),
    denominator: parseInt(document.getElementById('a-denominator').value)
  };
  var b = {
    numerator: parseInt(document.getElementById('b-numerator').value),
    denominator: parseInt(document.getElementById('b-denominator').value)
  };

  if (a.denominator === 0 || b.denominator === 0 || a.numerator === 0 || b.numerator === 0) {
    document.getElementById('result').innerText = 'Помилка: знаменник або чисельник не може бути 0!';
    return;
  }

  var result = Fraction[operation](a, b);
  var isNegative = result.numerator * result.denominator < 0;
  var absNumerator = Math.abs(result.numerator);
  var absDenominator = Math.abs(result.denominator);
  document.getElementById('result').innerHTML = "\n      <div style=\"display: flex; align-items: center; gap: 6px;\">\n        ".concat(isNegative ? '<span style="font-size: 20px;">−</span>' : '', "\n        <math xmlns=\"http://www.w3.org/1998/Math/MathML\">\n          <mfrac>\n            <mn>").concat(absNumerator, "</mn>\n            <mn>").concat(absDenominator, "</mn>\n          </mfrac>\n        </math>\n      </div>\n    ");
}