export interface Movable {
    move(): void;
}
export class CarMov implements Movable {
    move() { console.log("Car moves"); }
}
export class Robot implements Movable {
    move() { console.log("Robot moves"); }
}