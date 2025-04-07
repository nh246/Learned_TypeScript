// Example 1: Generic Function
// function identity<T>(arg: T): T {
//     return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(42);

// // Example 2: Generic Class
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function(x, y) { return x + y; };

// // Example 3: Generic Interface
// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }

// function identity2<T>: GenericIdentityFn<T> {
//     return function(arg: T) { return arg; };
// }

// let myIdentity: GenericIdentityFn<number> = identity2<number>;

function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(123)); // Output: 123

interface Box<T> {
    content: T;
}

const stringBox: Box<string> = { content: "TypeScript" };
const numberBox: Box<number> = { content: 42 };

console.log(stringBox.content); // Output: TypeScript
console.log(numberBox.content); // Output: 42

class DataHolder<T> {
    private data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }

    setData(data: T): void {
        this.data = data;
    }
}

const stringHolder = new DataHolder<string>("Initial Data");
console.log(stringHolder.getData()); // Output: Initial Data
stringHolder.setData("Updated Data");
console.log(stringHolder.getData()); // Output: Updated Data

function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
}

logLength("Hello"); // Works because strings have a `length` property.
logLength([1, 2, 3]); // Works because arrays have a `length` property.
// logLength(123); // Error: Type 'number' does not satisfy the constraint.

function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

const result = pair<string, number>("Age", 25);
console.log(result); // Output: ["Age", 25]


