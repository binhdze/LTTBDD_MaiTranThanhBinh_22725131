export class Animal {
    name: string;
    constructor(name: string) { this.name = name; }
}
export class Dog extends Animal {
    bark() { return "Woof!"; }
}
export class Cat extends Animal {
    meow() { return "Meow!"; }
}