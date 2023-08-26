//Accessing Object Properties
var person = {
  firstName: "Raghavendra",
  lastName: "M J",
  email: "rag@gmail.com",
  phone: "1234567890",
  age: "28",
};

console.log("1. Person :- ", person);

//Deleting property via . notation
delete person.age;
console.log("2. Person :- ", person);

//Deleting property via bracket
delete person["phone"];
console.log("3. Person :- ", person);

//Deleting property via bracket + variable
var emailProperty = "email";
delete person[emailProperty];
console.log("4. Person :- ", person);
