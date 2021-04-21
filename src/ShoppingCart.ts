import {Item} from "./Item";

export class ShoppingCart {

    total = 0;

    add(item: Item) {
        if (item.itemName === 'Apple' && item.quantity % 3 === 0) {
            this.total = 1.2 * (item.quantity / 3);
        } else {
            this.total += item.price * item.quantity;
        }
    }

    checkout() {
        return this.total;
    }
}
