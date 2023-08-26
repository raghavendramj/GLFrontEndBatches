var counter = 10; //Global Variable

console.log("1. Global Counter :- ", counter);

function changeCounter() {
  var counter = 20; //Local Variable
  console.log("Inside changeCounter :: Counter :- ", counter);
}
changeCounter();

console.log("2. Global Counter :- ", counter);

var number = 5;

var square = (function (num) {
  return num * num;
})(number);
console.log("3. Square of a number is :- ", square);



