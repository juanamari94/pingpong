import {Item} from "./Item";

export class Cart {
    items: Item[] = [];


    getTotal(): number {
        let total = 0;

        for (const item of this.items){
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
