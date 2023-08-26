//ES6 Constructcor function
function Vehicle(type, color, brand, model) {
  this.type = type;
  this.color = color;
  this.brand = brand;
  this.model = model;
}

//ES6 Class
class VehicleES6 {
    constructor(type, color, brand, model) {
        this.type = type;
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
}

var breeza = new Vehicle("Compact SUV", "White", "MaruthiSuzuki", "Breeza");

//3 Steps Process
//Step 1:- create an empty {} -> Object.create({})
//Step 2 :- add all the properties -> type, brand and model
//Step 3:- tag this to that object and return

// console.log("Object breeza :- ", breeza);
// console.log("Object property keys :- ", Object.keys(breeza));
// console.log("Object property values :- ", Object.values(breeza));

//Iterate the object!
for(var eachKey in breeza){
    console.log("Property Key :- ", eachKey, " Value :- ", breeza[eachKey]);
}