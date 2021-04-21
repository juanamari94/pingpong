import {Item} from "./Item";

export class ShoppingCart {

    total = 0;

    add(item: Item) {
        this.total += item.price * item.quantity;
    }

    checkout() {
        return this.total;
    }
}
