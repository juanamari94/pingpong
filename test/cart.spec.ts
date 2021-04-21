import {ShoppingCart} from "../src/ShoppingCart";
import {Item} from "../src/Item";

describe('Cart', () => {

    it('Total for one Apple is 50 cents', () => {
        const cart = new ShoppingCart();
        const apple = new Item('Apple', 0.5);
        cart.add(apple);
        const total = cart.checkout();
        expect(total).toEqual(0.5);
    });

    it('Total for one Banana is 1.0 dollar', () => {
        const cart = new ShoppingCart();
        const banana = new Item('Banana', 1.0);
        cart.add(banana);
        const total = cart.checkout();
        expect(total).toEqual(1.0);
    });
});
