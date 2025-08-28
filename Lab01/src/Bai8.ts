export class Product {
    constructor(public name: string, public price: number) {}
}

export const products = [
    new Product("A", 50),
    new Product("B", 150),
    new Product("C", 200)
];

export const expensiveProducts = products.filter(p => p.price > 100);