export class ShopsComponents {
    render () {
        const shops = ["Frankfurt", "Zurich"];

        const div = document.createElement("div");

        for (const shop of shops) {
            const p = document.createElement("p");
            p.textContent = shop;
            div.append(p);
        }
        return div;
    }
}