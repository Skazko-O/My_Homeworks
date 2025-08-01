/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/

function age() {
    const vik = Number(document.getElementById('vik').value.replace(",", "."))
    if (isNaN(vik) || vik < 0 || vik == "") {
        document.getElementById('rez_1').innerText = 'Ви вели невірні данні'
        return
    }
    else if (vik >= 0 && vik < 12) {
        document.getElementById('rez_1').innerText = 'Ви дитина'
    }
    else if (vik >= 12 && vik < 18) {
        document.getElementById('rez_1').innerText = 'Ви підліток'
    }
    else if (vik >= 18 && vik < 60) {
        document.getElementById('rez_1').innerText = 'Ви дорослий'
    }
    else if (vik >= 60 && vik < 123) {
        document.getElementById('rez_1').innerText = 'Ви є пенсіонером'
    }
    else {
        document.getElementById('rez_1').innerText = 'Ще раз перевір свідоцтво про народження, це новий рекорд!!'
    }
}
/* Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д). */

function chislo() {
    const cifra = document.getElementById(`cifra`).value
    const text = "Символ: ";
    if (isNaN(cifra) || cifra == "") {
        document.getElementById('rez_2').innerText = 'Ви вели невірні данні'
        return
    }
    switch (+cifra) {
        case 0:
            document.getElementById('rez_2').innerText = `${text} )`
            break;
        case 1:
            document.getElementById('rez_2').innerText = `${text} !`
            break;
        case 2:
            document.getElementById('rez_2').innerText = `${text} @`
            break;
        case 3:
            document.getElementById('rez_2').innerText = `${text} #`
            break;
        case 4:
            document.getElementById('rez_2').innerText = `${text} $`
            break;
        case 5:
            document.getElementById('rez_2').innerText = `${text} %`
            break;
        case 6:
            document.getElementById('rez_2').innerText = `${text} ^`
            break;
        case 7:
            document.getElementById('rez_2').innerText = `${text} &`
            break;
        case 8:
            document.getElementById('rez_2').innerText = `${text} *`
            break;
        case 9:
            document.getElementById('rez_2').innerText = `${text} (`
            break;
        default:
            document.getElementById('rez_2').innerText = `Неочікуване значення. Тільки від 0 до 9`
    }
}

/*Підрахуй суму всіх чисел в заданому користувачем діапазоні.*/

function sumaDiapozon() {
    const chislo1 = parseInt(document.getElementById('chislo1').value)
    const chislo2 = parseInt(document.getElementById('chislo2').value)
    let sum = 0;
    const min = Math.min(chislo1, chislo2);
    const max = Math.max(chislo1, chislo2);
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    document.getElementById('rez_3').innerText = `Сума: ${sum}`;
}

/*Запитай у користувача 2 числа і знайди найбільший спільний дільник.*/

function spilniDilnik() {
    let a = parseInt(document.getElementById('a').value)
    let b = parseInt(document.getElementById('b').value)

    /*для знаходження НСД використовуємо алгортм Евкліда*/

    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    document.getElementById('rez_4').innerText = `Найбільший дільник: ${a}`;
}

/*Запитай у користувача число і виведи всі дільники цього числа.*/

function dilniki() {
    const a1 = parseInt(document.getElementById('a1').value)
    if (isNaN(a1) || a1 == "") {
        document.getElementById('rez_5').innerText = 'Ви вели невірні данні'
        return
    }
    else {
        let result = "";
        for (let i = 1; i <= Math.abs(a1); i++) {
            if (a1 % i == 0) {
                result += i + ", ";
            }
        }
        document.getElementById('rez_5').innerText = `Всі дільники числа: ${result}`;
    }
}

/* Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом. */

/* Розклав число в масив і порівняв елементи 1=5 і 2=4 (звісно в масиві з 0 рахуємо)*/
/*Зробив цікаву перевірку на довжину числа яке ввів користувач, окрім тих перевірок, що вже були*/

function palindrom() {
    const a5 = parseInt(document.getElementById('a5').value)
    if (isNaN(a5) || a5 == "" || String(a5).length !== 5) {
        document.getElementById('rez_6').innerText = 'Ви вели невірні данні'
        return
    }
    digit = String(a5).split("");
    if (digit[0] === digit[4] && digit[1] === digit[3]) {
        document.getElementById('rez_6').innerText = 'Це паліндром!'
    }
    else {
        document.getElementById('rez_6').innerText = 'Звичайне число'
    }
}

/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:*/

function discaunt() {
    const sumaPocypcu = Number(document.getElementById('sumaPocypcu').value.replace(",", "."))
    let sumaDoSplati = 0;
    let znijka = 0;
    if (isNaN(sumaPocypcu) || sumaPocypcu < 0 || sumaPocypcu == "") {
        document.getElementById('rez_7').innerText = 'Ви вели невірні данні'
        return
    }
    if (sumaPocypcu >= 200 && sumaPocypcu < 300) {
        znijka = 0.03 * sumaPocypcu;
    } else if (sumaPocypcu >= 300 && sumaPocypcu < 500) {
        znijka = 0.05 * sumaPocypcu;
    } else if (sumaPocypcu >= 500) {
        znijka = 0.07 * sumaPocypcu;
    }
    sumaDoSplati = sumaPocypcu - znijka;
    document.getElementById('rez_7').innerText = `Сума до сплати: ${sumaDoSplati.toFixed(2)} грн.`
}

/*Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
При цьому також порахуй, скільки з них парних і непарних. 
Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем. */

function countNumbers() {
    let numbersArray = []
    const n = 10; //кількість ітерацій
    for (let i = 0; i < n; i++) {
        let input = prompt(`Введи довільне число. Залишилось ввести ${n - i} чисел`);
        if (isNaN(input) || input.trim() == "" || input == null) {
            alert('Ви вели невірні данні. Спробуйте ще раз');
            i--;
            continue;
        }
        numbersArray.push(Number(input));
    }
    let zeroCount = numbersArray.filter(num => num === 0).length;
    let positiveCount = numbersArray.filter(num => num > 0).length;
    let negativeCount = numbersArray.filter(num => num < 0).length;
    let evenCount = numbersArray.filter(num => num != 0 && num % 2 == 0).length;
    let oddCount = numbersArray.filter(num => num % 2 != 0).length;

    document.getElementById('rez_8').innerText = `Ви ввели такі числа: (${numbersArray}) з них
    ${positiveCount} додатні, ${negativeCount} від’ємні, ${zeroCount} нулів, ${evenCount} парних і ${oddCount} непарних`;
}

/*Зацикли відображення днів тижня таким чином: «День тижня. 
Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.*/

function daysWeek() {
    let weekDay = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота', 'Неділя']
    let i = 0;
    do {
        alert(`${weekDay[i]}\nХочеш побачити наступний день?`);
        i = (i + 1) % weekDay.length;
    }
    while (confirm("Натисно ОК якщо хочеш дізнатись, або скасуй натисни Cancel"))
}

/* Гра "Вгадай число" */


function gameGuessNumber() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }
    let Q; //оголошуємо як глобальну змінну
    let N;
    let counter = 0;

    do { //знаходимо середину масиву
        counter++;
        let sum = numbers.reduce((acc, val) => acc + val, 0); //Сумуємо всі значення масиву за доп. метода reduce acc - акумулює значення, val додає поточне значення. 0 - початкове значення acc
        N = Math.round(sum / numbers.length) // дізнаємось середину масива = сума всіх значень ділимо на довжину (кількість елементів в масиві)
        Q = prompt(`Число яке ти загадав = ${N}? Введи '=', '>' або '<'`);
        if (Q == null) {
            alert("Ви вийшли з гри!");
            return;
        }

        Q = Q.trim(); // обрізаємо можливі пробіли щоб спрацювало порівняння

        if (Q == ">") {
            numbers = numbers.slice(numbers.indexOf(N) + 1); //метод slice повертає частину масива з вказаного індекса. indexOf повертає індекс масива
        }
        else if (Q == "<") {
            numbers = numbers.slice(0, numbers.indexOf(N));
        }
    } while (Q != "=");
    alert(`Я вгадав число з ${counter} ітерації. Це число ${N}`) 
}

/*Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.*/

function multiTable() {
    let html = '<div class="table">';
    for (let i = 2; i <= 9; i++) {
        html += '<div class="kolonka">';
        for (let j = 1; j <= 10; j++) {
            html += `<div class="raw">${i} x ${j} = ${i * j}</div>`;
        }
        html += '</div>';
    }
    html += '</div>';
    document.getElementById('rez_9').innerHTML = html;
}

/*Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.*/

function nextDate(){
    const input = document.getElementById("userDate").value;
    const date = new Date(input);    
    date.setDate(date.getDate() + 1); // метод .getDate повертає число дня місяця. метод .setDate змінює день. Якщо такого дня в місяці немає, переводить на перше число наступного місяця 
    const formatted = date.toLocaleDateString("uk-UA");
    document.getElementById('rez_10').innerText = `Наступний день буде ${formatted}`
}