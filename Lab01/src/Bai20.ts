export interface Vehicle {
    drive(): void;
}
export class Car implements Vehicle {
    drive() { console.log("Car driving"); }
}
export class Bike implements Vehicle {
    drive() { console.log("Bike driving"); }
}