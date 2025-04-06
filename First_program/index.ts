// string

// let names: string = "Nazmul Hossain";

// names = "Good developer";

// console.log(names);

// numbers

// let numbers: number = 15;

// console.log(numbers);

// boolean

// let isDone: boolean = true;

// console.log(isDone);

// type inference
// let tech = "Typescript";
// console.log(tech);

// let think = 12;
// console.log(think);

// let isDone: any = true;
// isDone = "true";
// isDone = 12;

// console.log(isDone);

// anotation in typescript

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(10, 20));
// function bul(num3: boolean) {
//   return num3;
// }

// console.log(bul(true));

// const doublt = (x: number, y: number) => {
//   return x * y;
// };
// console.log(doublt(10, 23));

// function greet(name: string = "Nazmul") {
//   return `Hello ${name}`;
// }
// console.log(greet());

// annotation in return type

// function add1(num1: number, num2: number): number {
//   return num1 + num2;
// }

// console.log(add1(10, 20));

// const doublt1 = (x: number, y: number): number => {
//   return x * y;
// };
// console.log(doublt1(10, 23));

// voide type

// function print(message: string): void {
//   console.log(message);
// }

// print("Hello");

// function throwError(message: string): never {
//   throw new Error(message);
// }

// throwError("Error");

// function infinite(): never {
//   while (true) {}
// }

// infinite();

// let x:never
// function neverreturn(): never {
//   while (true) {}
// }

// x = neverreturn()

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const strins: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const anything: any[] = ["1", true, "3", { name: "Nazmul" },5];

// console.log(numbers);
// console.log(strins);
// console.log(anything);
// const numbers1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// mested array

// const array1: number[][] = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   console.log(array1);

// const array2: (string | number)[][][] = [[
//     ["1", "2", "3"],], [["4", "5", "6"],
//     ["7", "8", "9"],]
//   ];

//   console.log(array2);

// objects in typescript

// const person: {firstName: string, lastName: string , age: number} = {
//     firstName: "Nazmul",
//     lastName: "Hossain",
//     age: 23
// }

// const person2: any = {
//     firstName: "Nazmul",
//     lastName: "Hossain",
//     age: 23
// };

// console.log(person);
// console.log(person2);

// type alias

// type Person = {
//     firstName: string;
//    readonly lastName: string;
//     age?: number;
// };

// const person3: Person = {
//     firstName: "Nazmul",
//     lastName: "Hossain",
//     // age: 23,
// };

// // person3.lastName = "Khan";

// console.log(person3);

// intersection type

// type Admin = {
//     name: string;
//     role: number;
// };

// type Employee = {
//     name: string;
//     salary: number;
// };

// type combined=  Admin & Employee

// const employee: (Admin & Employee) = {
//     name: "Nazmul",
//     role: 1,
//     salary: 10000,
// };

// console.log(employee);

// union

// type ID = string | number;

// const id1: ID = 123;
// const id2: ID = "123";

// function printId(id: ID) {
//     console.log(id);
// }

// printId(id1);
// printId(id2);

// literal types

// type A = "a" | "b" | "c";
// type B = 5 | "b" | "c";
// type c = true | false | 0

// const a: A = "a";
// const b: B = 5;
// const c:c = 0

// console.log(a);
// console.log(b);
// console.log(c);

// tuples

// let tuple: [number, string, boolean] = [1, "Nazmul", false];
// tuple = [2, "Hossain", true];
// console.log(tuple);

// enum

// enum Color {
//     Red = 1,
//     Green = 2,
//     Blue = 3,
//   }
//   let myColor: Color = Color.Green;
//   console.log(myColor);

// classes in typescript

// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
//   }

//   const person = new Person("Nazmul", 23);
//   console.log(person);

//  access modifiers

// class Person {
//   private name: string;
//   protected age: number;
//   public city: string;
//   constructor(name: string, city: string, age: number) {
//     this.age = age;
//     this.name = name;
//     this.city = city;
//   }

//   geter(): string | number  {
//     return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
//   }
// }

// const person = new Person("Nazmul", "dhaka", 24);
// console.log(person.geter());

// class Person {
//     protected email: string;
//     constructor(email: string) {
//         this.email = email;
//     }
// }
// class Employee extends Person {
//     showEmail() {
//         console.log(this.email);
//     }
// }
// const emp = new Employee("example@example.com");

// emp.showEmail();

// getters and setters

