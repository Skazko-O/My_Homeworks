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

function countArguments(...args) {
    return args.length;
}

function getResult_2() {
    const input = document.getElementById("arguments").value;
    const values = input.split(",").map(arg => arg.trim()).filter(arg => arg !== "");
    const count = countArguments(...values);
    document.getElementById("rez_2").textContent = `Кількість аргументів: ${count}`;
}



/*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/

function comparTheNumber(a, b) { //Порівнюємо два чила
    return a < b ? -1 : a > b ? 1 : 0;
}

function getResult_3() { // Вводимо данні, перевіряємо і виводимо результат
    const a = parseFloat(document.getElementById("valueA").value);
    const b = parseFloat(document.getElementById("valueB").value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("rez_3").textContent = "Будь ласка введіть два числа"
        return;
    }
    const result = comparTheNumber(a, b);
    document.getElementById("rez_3").textContent = `Результат порівняння: ${result}`
}

/* Напиши функцію, яка обчислює факторіал переданого їй числа. */

function calculateFactorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function getResult_4() {
    const n = parseInt(document.getElementById("factorial").value);
    if (isNaN(n) || n < 0) {
        document.getElementById("rez_4").textContent = "Будь ласка введіть натуральне число"
        return;
    }
    const result_4 = calculateFactorial(n);
    document.getElementById("rez_4").textContent = `Факторіал числа ${n}: ${result_4}`
}

/*Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
   Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/
function createNumber(a, b, c) {
    return (a * 100) + (b * 10) + c;
}

function getResult_5() {
    const a = parseFloat(document.getElementById("figure1").value);
    const b = parseFloat(document.getElementById("figure2").value);
    const c = parseFloat(document.getElementById("figure3").value);
    if (isNaN(a) || isNaN(b) || isNaN(b)) {
        document.getElementById("rez_5").textContent = "Будь ласка введіть три цифри"
        return;
    }

    if (![a, b, c].every(num => num >= 0)) {
        document.getElementById("rez_5").textContent = "Цифри тільки додатні або 0";
        return;
    }
    const result = createNumber(a, b, c);
    document.getElementById("rez_5").textContent = `Число: ${result}`
}

/* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */

function calcAreaOfRectangle(a, b = a) {
    return a * b;
}

function getResult_6() {
    const a = parseFloat(document.getElementById("sideA").value.replace(",", "."));
    let b = parseFloat(document.getElementById("sideB").value.replace(",", "."));

    if ([a, b].some(num => isNaN(num))) {
        document.getElementById("rez_6").textContent = "Будь ласка введіть три числа";
        return;
    }

    if (![a, b].every(num => num > 0)) {
        document.getElementById("rez_6").textContent = "Числа повинні бути більше нуля";
        return;
    }

    b = isNaN(b) ? a : b;

    const result = calcAreaOfRectangle(a, b);
    (a !== b) ? document.getElementById("rez_6").textContent = `Площа прямокутника = ${result} см²`
        : document.getElementById("rez_6").textContent = `Площа квадрата = ${result} см²`
}

/*Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
 Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/

function checkPerfectNumber(n) {
    let arr = []
    for (let i = 1; i < n; i++)
        if (n % i == 0) {
            arr.push(i);
        }
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum == n;
}

function getResult_7() {
    const n = parseInt(document.getElementById("perfectNumber").value);

    if (isNaN(n) || n <= 0) {
        document.getElementById("rez_7").textContent = "Будь ласка, введи натуральне число";
        return;
    }

    const result = checkPerfectNumber(n);
    document.getElementById("rez_7").textContent = `Число ${n} ${result ? "досконале число" : "не є досконалим"}`;
}

function getResult_8() {
    let arr = []
    const start = parseInt(document.getElementById("start").value);
    const finish = parseInt(document.getElementById("finish").value);
    if (isNaN(start) || isNaN(finish) || start <= 0 || finish <= 0) {
        document.getElementById("rez_8").textContent = "Будь ласка, введи натуральне число";
        return;
    }
    if (start > finish) {
        document.getElementById("rez_8").textContent = `Перше число повинно бути менше ніж друге`;
        return;
    }
    for (let i = start; i <= finish; i++){
        arr.push(i);
    }
    const result = arr.filter(checkPerfectNumber);
    document.getElementById("rez_8").textContent = `Досконалі числа - ${result}`;
}

