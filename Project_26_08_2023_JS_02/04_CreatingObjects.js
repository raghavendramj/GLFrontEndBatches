//Common ways of creating the object.

//1. Object Literal Syntax
const personLiteralWay = {
  firstName: "John",
  lastName: "Doe",
};
// Advantages: Simple and concise. Great for creating small, single instances of objects with straightforward properties.
// Best For: Creating simple data structures or single-use objects without methods or complex inheritance.

//2. Constructor Functions: ES5
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const personConstruorWay = new Person("John", "Doe");

// Advantages: Supports creating multiple instances with shared methods through prototype chain. More flexibility in defining methods.
// Best For: Creating objects with shared behavior (methods) and when you want to follow a more classical object-oriented programming style.

//3. ES6 Classes:
class PersonVia {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const personES6ClassWay = new Person("John", "Doe");

// Advantages: Offers a more modern and syntactically cleaner way to define classes with constructors and methods.
// Best For: Creating objects with shared behavior, following a more modern object-oriented programming style.

//4. Object.create:
const personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};
const person = Object.create(personPrototype);
person.firstName = "John";
person.lastName = "Doe";

// Advantages: Allows you to set up a prototype chain without using constructor functions.
// Best For: Creating objects with a specific prototype but without a constructor function.

//5. Factory Functions:
function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    greet() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    },
  };
}
const person = createPerson("John", "Doe");

// Advantages: Provides a way to encapsulate object creation logic and customize each instance.
// Best For: Creating objects with custom initialization logic and shared methods.
