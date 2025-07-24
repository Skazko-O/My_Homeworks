/* Мінмімум 2.Тобі потрібно зберігати ім’я та прізвище в змінній, 
придумай до 4-х імен змінних, що потрібні тобі для даної задачі. 
Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані)*/

let first_Name = "Sasha";
let age
let f_Name
let l_Name

lastName = firstName;

// let 1Name
// let first name
// let first-name  
// let let
// let ім'я

/*Мінімум 3.Вкажи всі можливі способи коментування коду*/

// перший спосіб коментування коду
/* другий спосіб коментування коду*/

/*Мінімум 4.Стилі написання імен змінних*/

let secName //camelCase
let UserProfile //PascalCase
let firs_name //snake_case
let FNAME //UPER_CASE

/*Норма: 1.Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”*/
function askName() {
    const first_Name = prompt('Як тебе звати?', '');
    alert(`Привіт, ${first_Name}`);
}
/*Норма: 2.Запитай рік народження користувача, порахуй його/її вік і виведи результат. 
Поточний рік вкажи в коді як константу;*/
function askAge() {
    const age = prompt('Який рік твого народження?');
    const currentYear = 2025;
    let yourAge = currentYear - age;
    alert(`Тобі ${yourAge}`);
}

/*Норма 3.Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата*/
function askP() {
    const squareSide = prompt('Напиши довжину сторони квадрату в см.');
    let perSquare = 4 * squareSide;
    alert(`Периметр квадрата дорівнює ${perSquare} см.`);
}

/*Максимум 1.Запитай у користувача радіус кола і виведи площу такої окружності.*/
function askR() {
    const radius = prompt('Напиши радіус кола в см., я зможу порахувати площу кола');
    const Pi = Math.PI;
    let sCircle = Pi * (radius ** 2);
    alert(`Площа кола = ${sCircle.toFixed(2)} см²`);
}

/*Максимум 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/
function askDistance() {
    const distance = prompt('Напиши відстань в кілометрах між двома містами');
    const timeTo = prompt('За скільки годин хочеш дістатись?');
    let speed = distance / timeTo;
    alert(`Тобі потрібно рухатись зі швидкістю ${speed} км/год`);
}

/*Максимум 3.Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. 
Курс валют зберігається в константі.*/

function convertCurrency() {
    const currencyUSD = prompt('Напиши, скільки долларів бажаєшь конвертувати в евро');
    const exchangeSellUAH = 41.35;
    const exchangeBuyEUR = 49.5;
    let currencyEUR = (currencyUSD * exchangeSellUAH) / exchangeBuyEUR;
    alert(`${currencyUSD} долларів дорівнює ${currencyEUR.toFixed(2)} евро`);
}