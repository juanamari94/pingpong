import {ShoppingCart} from "../src/ShoppingCart";
import {Item} from "../src/Item";

describe('Cart', () => {

    it('Total for one Apple is 50 cents', () => {
        const cart = new ShoppingCart();
        const apple = new Item('Apple', 0.5, 1);
        cart.add(apple);
        const total = cart.checkout();
        expect(total).toEqual(0.5);
    });

    it('Total for one Banana is 1.0 dollar', () => {
        const cart = new ShoppingCart();
        const banana = new Item('Banana', 1.0, 1);
        cart.add(banana);
        const total = cart.checkout();
        expect(total).toEqual(1.0);
    });

    it('Total for two Apples is 1.0 dollar', () => {
        const cart = new ShoppingCart();
        const apples = new Item('Apple', 0.5, 2);
        cart.add(apples);
        const total = cart.checkout();
        expect(total).toEqual(1.0);
    });

    it('Total for one Banana is 1.0 dollar', () => {
        const cart = new ShoppingCart();
        const apples = new Item('Apple', 0.5, 2);
        const banana = new Item('Banana', 1.0, 1);
        cart.add(apples);
        cart.add(banana);
        const total = cart.checkout();
        expect(total).toEqual(2.0);
    });
});
