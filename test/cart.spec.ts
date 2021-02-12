
import { Cart } from '../src/Cart'

test("Get total for 1 Apple", () => {
    const cart = new Cart();
    const item = Item("Apple", 1)
    cart.addItem(item)

    expect(cart.getTotal()).toBe(50);
});
