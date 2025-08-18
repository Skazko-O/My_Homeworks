export class CoffeComponents {
    render () {
        const coffees = ["Coffe", "Cappuchino", "Mocha"];

        const div = document.createElement("div");

        for (const coffee of coffees) {
            const p = document.createElement("p");
            p.textContent = coffee;
            div.append(p);
        }
        return div;
    }
}