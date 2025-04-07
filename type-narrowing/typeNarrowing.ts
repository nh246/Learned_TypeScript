function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log("It's a string:", value.toUpperCase());
    } else {
        console.log("It's a number:", value.toFixed(2));
    }
}

printValue("Hello"); // Output: It's a string: HELLO
printValue(42.123); // Output: It's a number: 42.12

class Animal {
    makeSound() {
        console.log("Animal sound!");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

function handleAnimal(animal: Animal) {
    if (animal instanceof Dog) {
        animal.makeSound(); // Calls Dog's implementation
    } else {
        animal.makeSound(); // Calls Animal's implementation
    }
}

handleAnimal(new Dog()); // Output: Woof!
handleAnimal(new Animal()); // Output: Animal sound!


function processInput(input: string | null) {
    if (input !== null) {
        console.log("Valid string input:", input.trim());
    } else {
        console.log("Input is null.");
    }
}

processInput("  TypeScript  "); // Output: Valid string input: TypeScript
processInput(null); // Output: Input is null.


function isString(value: unknown): value is string {
    return typeof value === "string";
}

function printLength(value: string | number | null) {
    if (isString(value)) {
        console.log("String length:", value.length);
    } else {
        console.log("Not a string.");
    }
}

printLength("Hello"); // Output: String length: 5
printLength(123); // Output: Not a string.


