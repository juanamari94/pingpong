import {ShoppingCart} from "../src/ShoppingCart";
import {Apple} from "../src/Apple";

describe('Cart', () => {

    it('Total for one Apple is 50 cents', () => {
        const cart = new ShoppingCart();
        const apple = new Apple();
        cart.add(apple);
        const total = cart.checkout();
        expect(total).toEqual(0.5);
    });
});
