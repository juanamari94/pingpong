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

    it('Total for one Banana and two Apples is 2.0 dollars', () => {
        const cart = new ShoppingCart();
        const apples = new Item('Apple', 0.5, 2);
        const banana = new Item('Banana', 1.0, 1);
        cart.add(apples);
        cart.add(banana);
        const total = cart.checkout();
        expect(total).toEqual(2.0);
    });

    it('Total for three Apples is 1.2 dollars', () => {
        const cart = new ShoppingCart();
        const apples = new Item('Apple', 0.5, 3);
        cart.add(apples);
        const total = cart.checkout();
        expect(total).toEqual(1.2);
    });

    it('Total for six Apples is 2.4 dollars', () => {
        const cart = new ShoppingCart();
        const apples = new Item('Apple', 0.5, 6);
        cart.add(apples);
        const total = cart.checkout();
        expect(total).toEqual(2.4);
    });

    it('Total for three Bananas is 3.0 dollars', () => {
        const cart = new ShoppingCart();
        const bananas = new Item('Banana', 1.0, 3);
        cart.add(bananas);
        const total = cart.checkout();
        expect(total).toEqual(3.0);
    });

    it('Total for four Bananas is 3.5 dollars', () => {
        const cart = new ShoppingCart();
        const bananas = new Item('Banana', 1.0, 4);
        cart.add(bananas);
        const total = cart.checkout();
        expect(total).toEqual(3.5);
    });

    it('Total for 3 apples and 3 bananas unordered should always be 4.2 dollars', () => {
        const items = [
            new Item('Apple', 0.5, 1),
            new Item('Apple', 0.5, 1),
            new Item('Apple', 0.5, 1),
            new Item('Banana', 1.0, 1),
            new Item('Banana', 1.0, 1),
            new Item('Banana', 1.0, 1)
        ]
        const cart = new ShoppingCart();
        for (const item of items) {
            cart.add(item);
        }
        const total = cart.checkout();
        expect(total).toEqual(4.2);
    });

    it('Total for 3 apples (special), 4 bananas (special) and 2 carrots should be 9.4 dollars', () => {
        const items = [
            new Item('Apple', 0.5, 3),
            new Item('Banana', 1, 4),
            new Item('Carrots', 2, 2),
        ]
        const cart = new ShoppingCart();
        for (const item of items) {
            cart.add(item);
        }
        const total = cart.checkout();
        expect(total).toEqual(8.7);
    });

    it('Total for 4 apples on special for 1.6 dollars', () => {
        const items = [
            new Item('Apple', 0.5, 4), //on special for 1.6
            new Item('Apple', 0.5, 3), //1.5
        ]
        const cart = new ShoppingCart();
        for (const item of items) {
            cart.add(item);
        }
        const total = cart.checkout();
        expect(total).toEqual(1.6 + 1.5);
    });
});
