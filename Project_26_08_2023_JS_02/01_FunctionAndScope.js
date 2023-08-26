//Normal Function...
function addNumbers(a, b) {
  var result = a + b;
  console.log("addNumbers :: Result of a+b is :- ", result);
  return result;
}
// addNumbers(10, 20);

//Anonymous Function!
var addNumbersAnonymous = function (a, b) {
  var result = a + b;
  console.log("addNumbersAnonymous :: Result of a+b is :- ", result);
  return result;
};
// addNumbersAnonymous(10, 20);
// addNumbersAnonymous(23, 45);
// addNumbersAnonymous(34, 78);

//IIFE Function - Immediately Invoked Function Expression

(function () {
  console.log("Welcome to the class");
})();

(function (a, b) {
  var result = a + b;
  console.log("IIFE :: Result of a+b is :- ", result);
  return result;
})(12, 23);


