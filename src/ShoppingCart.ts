export class ShoppingCart {

    counter = 0;

    add(item: any) {
        this.counter += item.price;
    }

    checkout() {
        return this.counter;
    }
}
