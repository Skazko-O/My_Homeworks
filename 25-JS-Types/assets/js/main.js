/* Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.*/

function suma() {
    const element1 = document.getElementById('element1').value
    const element2 = document.getElementById('element2').value
    let suma_2_chisel = parseFloat(element1.replace(",",".")) + parseFloat(element2.replace(",","."));
    document.getElementById('rez_1').innerHTML = suma_2_chisel
        ? `Сума = <b>${Number(suma_2_chisel.toFixed(2))}</b>`
        : '<span style="color: red">Введіть числа</span>'
}

/*Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.*/

function suma_text() {
    const elementText = document.getElementById('elementText').value
    const elementChislo = document.getElementById('elementChislo').value
    let suma_tex_i_chislo = parseInt(elementText) + parseInt(elementChislo);
    document.getElementById('rez_2').innerHTML = suma_tex_i_chislo
        ? `Сума = <b>${suma_tex_i_chislo}</b>`
        : '<span style="color: red">Введіть числа</span>'
}

/*Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.*/

function calc_file() {
    const Gb = document.getElementById('Gb').value
    const fileSizeMB = 820;
    let file = Math.floor(Gb * 1024 / fileSizeMB);
    document.getElementById('rez_3').innerHTML = file
        ? `<b>${file} файл(ів)!</b>`
        : '<span style="color: red">Введіть обсяг флешки (тільки число)</span>'
}

/*Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/

function chocolate() {
    const sumInput = document.getElementById('sumInput').value.replace(",",".")
    const priceInput = document.getElementById('priceInput').value.replace(",",".")
    const wallet = parseFloat(sumInput);
    const price = parseFloat(priceInput);
    let chocoQ = Math.floor (wallet / price);
    let rest = (wallet - chocoQ * price).toFixed(2);
    document.getElementById('rez_4').innerHTML = `Можна купити ${chocoQ} шоколадки (-ку -ок) і залишиться ${rest} грн.`
}

/*Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).*/

function chislo() {
    const chisloInput = document.getElementById('chisloInput').value
    const num = parseInt(chisloInput);
    const digit1 = num % 10;
    const digit2 = Math.floor((num % 100) / 10);
    const digit3 = Math.floor(num / 100);
    const reversed = `${digit1}${digit2}${digit3}`;
    document.getElementById('rez_5').innerText = `${reversed}`;
}

/*Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.*/

function bank() {
    const sumVkladInput = document.getElementById('sumVkladInput').value.replace(",",".")
    const sum = parseFloat(sumVkladInput);
    const months = 2; //термін вкладу в місяцях
    const stavka = 5; //ставка відсоток річних
    let sumNarahVidsotkiv = ((stavka/12 * sum)/100 * months).toFixed(2);
    document.getElementById('rez_6').innerText = `Сума нарахованих відсотків ${sumNarahVidsotkiv} грн.`
}