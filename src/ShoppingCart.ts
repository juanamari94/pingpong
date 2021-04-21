import {Item} from "./Item";

export class ShoppingCart {

    counter = 0;

    add(item: Item) {
        this.counter += item.price;
    }

    checkout() {
        return this.counter;
    }
}
