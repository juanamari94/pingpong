import {ShoppingCart} from "../src/ShoppingCart";
import {Apple} from "../src/Apple";
import {Banana} from "../src/Banana";

describe('Cart', () => {

    it('Total for one Apple is 50 cents', () => {
        const cart = new ShoppingCart();
        const apple = new Apple();
        cart.add(apple);
        const total = cart.checkout();
        expect(total).toEqual(0.5);
    });

    it('Total for one Banana is 1.0 dollar', () => {
        const cart = new ShoppingCart();
        const banana = new Banana();
        cart.add(banana);
        const total = cart.checkout();
        expect(total).toEqual(1.0);
    });
});
