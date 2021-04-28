import {Item} from "./Item";

export class ShoppingCart {

    total = 0;
    cart: Map<string, any> = new Map<string, any>();

    add(item: Item) {
        const existingItemsQuantity = this.cart.get(item.itemName)?.quantity || 0;
        this.cart.set(item.itemName, {quantity: existingItemsQuantity + item.quantity, item: item});
    }

    checkout() {
        for (const [itemName, cartDescription] of this.cart.entries()) {
            const {quantity, item} = cartDescription;
            if (itemName === 'Apple' && quantity % 3 === 0) {
                this.total += 1.2 * (quantity / 3);
            } else if (itemName === 'Banana' && quantity % 4 === 0) {
                this.total += 3.5 * (quantity / 4);
            } else {
                this.total += item.price * quantity;
            }
        }
        return this.total;
    }
}
