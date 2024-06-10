"use strict";
let x;
x = 10;
// y = 11;          error y is not defined when strict mode is used
// console.log(y);
console.log(x);
f1();
function f1() {
  console.log("hello");
}

//function declaration
function calcArea1(radius) {
  return radius * radius;
}
const area = calcArea1(2);
console.log(area);

// function expression
const getArea = function (radius) {
  return radius * radius;
};
let newArea = getArea(3);
console.log(newArea);

//Arrow function
const calArea = (radius) => radius * radius;
console.log(calArea(4));
let hello = (name) => "hello" + name;
console.log(hello("sony"));
let newage = (age) => 20 - age;
console.log(newage(10));
const calAge = (age) => {
  const val = 2030;
  return val - age;
};
console.log(calAge(1990));
