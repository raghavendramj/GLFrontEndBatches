var printFunction = function (result) {
  console.log("Printing result :- ", result);
};
// printFunction("Numbers are good");

function multiplyNumbers(a, b, callBackFunction) {
  let result = a * b;
  callBackFunction(result);
}
// multiplyNumbers(10, 20, printFunction);

//----------------------------------------------

var add = function (a, b) {
  console.log("Addition Result :- ", a + b);
};

var subtract = function (a, b) {
  console.log("Subtraction Result :- ", a - b);
};

var divide = function (a, b) {
  console.log("Division Result :- ", a / b);
};

function calculate(a, b, operatorFunction) {
  operatorFunction(a, b);
}

calculate(25, 13, add);
calculate(25, 13, subtract);
calculate(25, 5, divide);









//-------------------------------------------------
// var subtract = function (a, b) {
//   console.log("Subtraction Result :- ", a - b);
// };

// operateNumbers(25, 13, subtract);

// var divide = function (a, b) {
//   console.log("Division Result :- ", a / b);
// };
// operateNumbers(25, 5, divide);
