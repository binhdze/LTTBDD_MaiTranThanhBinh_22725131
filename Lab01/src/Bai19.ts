export class AnimalPoly {
    sound() { return "Some sound"; }
}
export class DogPoly extends AnimalPoly {
    sound() { return "Woof!"; }
}
export class CatPoly extends AnimalPoly {
    sound() { return "Meow!"; }
}