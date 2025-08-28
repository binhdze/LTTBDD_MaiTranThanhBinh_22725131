import { Teacher } from "./Bai27";
export class Student {
    constructor(public name: string) {}
}
export class School {
    students: Student[] = [];
    teachers: Teacher[] = [];
    addStudent(student: Student) { this.students.push(student); }
    addTeacher(teacher: Teacher) { this.teachers.push(teacher); }
    displayInfo() {
        console.log("Students:", this.students.map(s => s.name));
        console.log("Teachers:", this.teachers.map(t => t.name));
    }
}