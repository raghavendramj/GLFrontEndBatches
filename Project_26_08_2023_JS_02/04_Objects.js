var car = {
  model: "Innova", //Property -> key : value
  brand: "Toyota",
  cost: "xyzUSD",
  color: "white",
  start: function () {
    console.log("Car has Started!");
  },
  stop: function () {
    console.log("Car has Stopped!");
  },
};

//How do we create objects? - Several ways of creating objects..
var player1 = {}; // Using {} -> Object Literal
var player2 = new Object(); // Using Constructor function
var player3 = Object.create({}); // Using Object.create

console.log("player1 :- ", player1, " and its type is :-", typeof player1);
console.log("player2 :- ", player2, " and its type is :-", typeof player2);
console.log("player3 :- ", player3, " and its type is :-", typeof player3);


