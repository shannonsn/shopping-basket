
interface Shopping {
    product: string;
    price: number;
}

let items = {}
let totalPrice = 0
export class Basket {

    constructor() { }

    buy = function(product: string, price: number) {

        if (items[product] === undefined) {
            items[product] = price;
        } else {
            items[product] += price;
        }
        return "You bought a " + product + " @ R" + price;
    }

    cashout = function() {
        return items
    }
    checkout = function(address: string) {
        for (const item in items) {
            totalPrice += items[item];
        }
        items = {}
        return "Total cost = R " + totalPrice
    }

}
