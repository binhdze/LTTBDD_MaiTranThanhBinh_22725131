export class Person {
    constructor(public name: string) {}
}
export class Teacher extends Person {
    subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    introduce() { console.log(`I'm ${this.name}, I teach ${this.subject}`); }
}