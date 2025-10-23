export class Account {
    public id: number;
    private balance: number;
    readonly owner: string;
    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    getBalance() { return this.balance; }
}