import {Cart} from '../src/Cart';
import {Item} from '../src/Item';

test("Get total for 1 Apple", () => {
    const cart = new Cart();
    const item = new Item("Apple", 1)

    cart.addItem(item);

    expect(cart.getTotal()).toBe(50);
});

test("Get total for 2 Apple", () => {
    const cart = new Cart();
    const item = new Item("Apple", 2)

    cart.addItem(item);

    expect(cart.getTotal()).toBe(100);
});
