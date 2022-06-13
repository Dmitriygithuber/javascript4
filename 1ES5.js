'use sctrict'


function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.Make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};

const product1 = new Product('Товар 1', 580)
product1.Make25PercentDiscount();

console.log(product1);