
// interfaces 

interface Person {
    readonly name: string;
    age?: number;
    sayHi?(): void;
}

const person: Person = {
    name: "Nazmul",
    sayHi() {
        console.log("Hello");
    }
};
person.sayHi?.();

interface PersonPlus extends Person {
    salary: number;
}

const personPlus: PersonPlus = {
    name: "Nazmul",
    salary: 10000
};

console.log(personPlus);

class Employee implements PersonPlus {
    name: string;
    salary: number;
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}
const employee = new Employee("Nazmul", 10000);
console.log(employee);
