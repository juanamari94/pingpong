export class Item {
    itemName: string;
    price: number;
    quantity: number;

    constructor(itemName: string, price: number, quantity: number) {
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }
}
