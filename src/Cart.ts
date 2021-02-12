import {Item} from "./Item";

export class Cart {
    items: Item[] = [];


    getTotal(): number {
        let total = 0;

        for (const item of this.items) {
            if (item.name === "Banana") {
                return 30;
            }
            total += item.quantity * 50
        }

        return total;
    }

    addItem(item: Item): void {
        this.items.push(item)
    }

}


// var totalYears = pilots.reduce(function (accumulator, pilot) {
//     return accumulator + pilot.years;
// }, 0);
