export class Repository<T> {
    private items: T[] = [];
    add(item: T) { this.items.push(item); }
    getAll() { return this.items; }
}