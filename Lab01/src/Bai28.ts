export class AnimalProt {
    protected makeSound() { console.log("Some sound"); }
    public callSound() { this.makeSound(); }
}
export class DogProt extends AnimalProt {
    protected makeSound() { console.log("Woof!"); }
}
export class CatProt extends AnimalProt {
    protected makeSound() { console.log("Meow!"); }
}