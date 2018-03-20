var items = {};
var totalPrice = 0;
var Basket = (function () {
    function Basket() {
        this.buy = function (product, price) {
            if (items[product] === undefined) {
                items[product] = price;
            }
            else {
                items[product] += price;
            }
            return "You bought a " + product + " @ R" + price;
        };
        this.cashout = function () {
            return items;
        };
        this.checkout = function (address) {
            for (var item in items) {
                totalPrice += items[item];
            }
            items = {};
            return "Total cost = R " + totalPrice;
        };
    }
    return Basket;
})();
exports.Basket = Basket;
