export abstract class Appliance {
    abstract turnOn(): void;
}
export class Fan extends Appliance {
    turnOn() { console.log("Fan is on"); }
}
export class AirConditioner extends Appliance {
    turnOn() { console.log("AC is on"); }
}