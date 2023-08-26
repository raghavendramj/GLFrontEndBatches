var person = {
  firstName: "Raghavendra",
  lastName: "M J",
  email: "rag@gmail.com",
  phone: 1234567890,
  age: 28,
};

//1. Convert the object to JSON String.
var personStr = JSON.stringify(person);

console.log("1. Object person :- ", person);
console.log("1. Object person in JSON string format:- ", personStr);

//2. Convert the Valid JSON String to object
var newJSONStr = '{"firstName":"Raghavendra","lastName":"M J","email":"rag@gmail.com","phone":1234567890,"age":28}';

console.log("2. JSON String :- ", newJSONStr);
var newPerson = JSON.parse(newJSONStr);
console.log("2. JSON Str -> Object :- ", newPerson);
