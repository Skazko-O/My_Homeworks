const car = {
    brand: 'Ford',
    model: 'Kuga',
    year: 2019,
    avgSpeed: 120, // км/год
    fuelTank: 55, // літрів
    avgFuelConsuption: 5.5, // літрів на 100 км. 
    drivers: ['Oleksandr', 'Inna'],
    showDetail: function () {
        const info = `          
                <div><strong>Виробник:</strong> ${this.brand}</div>
                <div><strong>Модель:</strong> ${this.model}</div>
                <div><strong>Рік випуску:</strong> ${this.year}</div>
                <div><strong>Середня швидкість км/год:</strong> ${this.avgSpeed}</div>
                <div><strong>Об'єм паливного баку л.:</strong> ${this.fuelTank}</div>
                <div><strong>Витрата на 100 км.:</strong> ${this.avgFuelConsuption} л.</div>
                <div><strong>Водії:</strong> ${this.drivers.join(", ")}</div>
                `;
        document.getElementById("car-info").innerHTML = info;
    },
    addDriver(name) {
        this.drivers.push(name);
        return;
    },
    searchDriver(name) {
        return this.drivers.includes(name);
    },
    calcFuel(dist) {
        return this.avgFuelConsuption / 100 * dist;
    },
    calcTime(dist) {
        const time = dist / this.avgSpeed;
        let breakTime = Math.floor(time / 4);
        if (time % 4 === 0) {
            breakTime -=1;
        }
        return time + breakTime;
    }
};

car.showDetail();

function addDriver() {
    const name = document.getElementById("driverInput").value;
    car.addDriver(name);
    car.showDetail();
}

function searchDriver() {
    const name = document.getElementById("driverInput").value;
    const found = car.searchDriver(name);
    document.getElementById("rez-search").textContent = found ? "Знайшли" : "Не знайшли";
}

function calcTimeFuel() {
    const dist = document.getElementById("kmInput").value;
    const rezFuel = car.calcFuel(dist).toFixed(2);
    const rezTime = car.calcTime(dist);
    const rezMin = ((rezTime % 1) * 60).toFixed(2);
    document.getElementById("rez-calc").textContent = `За ${Math.round(rezTime)} годин і ${rezMin} хвилин. Витрата ${rezFuel} літрів`
}

/* ГОДИННИК */

const clock = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    onScreen() {
        const now = new Date();
        const pad = (num) => String(num).padStart(2, '0');
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
        const currentTime = `<span>${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}</span>`
        document.getElementById("nowClock").innerHTML = currentTime;
    },

    addSeconds(sec) {
        let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + sec;
        this.hours = Math.floor(totalSeconds / 3600) % 24;
        this.minutes = Math.floor((totalSeconds % 3600) / 60)
        this.seconds = totalSeconds % 60;
    },
    addMinutes(min) {
        this.addSeconds(min * 60);
    },
    addHours(hour) {
        this.addSeconds(hour * 3600);
    }
};

clock.onScreen();
// setInterval(clock.onScreen, 1000);

function addTime() {
    const sec = parseInt(document.getElementById("addS").value) || 0;
    const min = parseInt(document.getElementById("addM").value) || 0;
    const hour = parseInt(document.getElementById("addH").value) || 0;

    clock.addHours(hour);
    clock.addMinutes(min);
    clock.addSeconds(sec);

    const pad = (num) => String(num).padStart(2, '0');
    const modTime = `<span>${pad(clock.hours)}:${pad(clock.minutes)}:${pad(clock.seconds)}</span>`;
    document.getElementById("newClock").innerHTML = modTime;
}

/* ДРОБИ */

const a = {
    numerator: 0,
    denominator: 0
}

const b = {
    numerator: 0,
    denominator: 0
}

const Fraction = {
    simplify(numerator, denominator) {
        function nsd(a, b) {
            return b === 0 ? a : nsd(b, a % b);
        }
        const divisor = nsd(numerator, denominator);
        return {
            numerator: numerator / divisor,
            denominator: denominator / divisor
        };
    },

    sum(a, b) {
        const numerator = a.numerator * b.denominator + b.numerator * a.denominator;
        const denominator = a.denominator * b.denominator;
        return this.simplify(numerator, denominator);
    },

    subtraction(a, b) {
        const numerator = a.numerator * b.denominator - b.numerator * a.denominator;
        const denominator = a.denominator * b.denominator;
        return this.simplify(numerator, denominator);
    },

    multiplication(a, b) {
        const numerator = a.numerator * b.numerator;
        const denominator = a.denominator * b.denominator;
        return this.simplify(numerator, denominator );
    },

    division(a, b) {
        const numerator = a.numerator * b.denominator;
        const denominator = a.denominator * b.numerator;
        return this.simplify(numerator, denominator);
    }
}

function operation(operation) {
    const a = {
        numerator: parseInt(document.getElementById('a-numerator').value),
        denominator: parseInt(document.getElementById('a-denominator').value)
    };

    const b = {
        numerator: parseInt(document.getElementById('b-numerator').value),
        denominator: parseInt(document.getElementById('b-denominator').value)
    };

    if (a.denominator === 0 || b.denominator === 0 || a.numerator === 0 || b.numerator === 0) {
        document.getElementById('result').innerText = 'Помилка: знаменник або чисельник не може бути 0!';
        return;
    }

    const result = Fraction[operation](a, b);
   
    const isNegative = result.numerator * result.denominator < 0;
    const absNumerator = Math.abs(result.numerator);
    const absDenominator = Math.abs(result.denominator);

    document.getElementById('result').innerHTML = `
      <div style="display: flex; align-items: center; gap: 6px;">
        ${isNegative ? '<span style="font-size: 20px;">−</span>' : ''}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mfrac>
            <mn>${absNumerator}</mn>
            <mn>${absDenominator}</mn>
          </mfrac>
        </math>
      </div>
    `;
}


