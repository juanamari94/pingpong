"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.getTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.quantity * 50;
        }
        return total;
    };
    Cart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    return Cart;
}());
exports.Cart = Cart;
// var totalYears = pilots.reduce(function (accumulator, pilot) {
//     return accumulator + pilot.years;
// }, 0);
