'use sctrict'

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    Make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}

const product1 = new Product('Товар 1', 580)
product1.Make25PercentDiscount();

console.log(product1);