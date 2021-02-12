"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("../src/Cart");
var Item_1 = require("../src/Item");
describe('Cart', function () {
    test("Get total for 1 Apple", function () {
        var cart = new Cart_1.Cart();
        var item = new Item_1.Item("Apple", 1);
        cart.addItem(item);
        expect(cart.getTotal()).toBe(50);
    });
    test("Get total for 2 Apple", function () {
        var cart = new Cart_1.Cart();
        var item = new Item_1.Item("Apple", 2);
        cart.addItem(item);
        expect(cart.getTotal()).toBe(100);
    });
});
