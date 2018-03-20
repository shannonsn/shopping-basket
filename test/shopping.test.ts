"use strict"
import { Basket } from '../shopping';
import assert = require('assert');

describe("Basket function", function() {
    it("should get the product and price from the shopping function", function() {
        let shopping101 = new Basket();
        assert.equal("You bought a glove @ R350", shopping101.buy("glove", 350))
    });
    it('should be able to get the list of all the products and the prices', function() {
        let shopping101 = new Basket();
        shopping101.buy("hat", 190);
        assert.deepEqual({ glove: 350, hat: 190 }, shopping101.cashout())
    });
    it('should get the total amount for the products in the basket', function() {
        let shopping102 = new Basket();
        shopping102.buy("hellmet", 2500);
        shopping102.buy("bike", 15000);
        shopping102.buy("protective gear", 500);
        assert.deepEqual("Total cost = R 18540", shopping102.checkout("Cape Town"))
    });

});
