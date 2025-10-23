import { Product } from "./Bai8";
export class Order {
    products: Product[] = [];
    addProduct(product: Product) { this.products.push(product); }
    totalPrice() { return this.products.reduce((sum, p) => sum + p.price, 0); }
}