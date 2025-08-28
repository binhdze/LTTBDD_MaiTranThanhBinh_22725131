import { Person } from "./Bai1";
export class Student1 extends Person{
    grade: number;

    constructor(name: String, age: number, grade: number){
        super(name,age);
        this.grade = grade;

    }
}