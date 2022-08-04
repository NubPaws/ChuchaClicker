export class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
