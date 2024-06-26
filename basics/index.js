console.log("from js file");

// varibale declaration
let b;
//assignment
b = 10;
//variable declaration and assignment
let a = 10;
console.log(a);
//variable re-assignment
a = 20;
console.log(a);
a = "abc";
console.log(a);
//backticks
let name = "dog";
console.log('My name is ${name}');  // output: My name is ${name}
console.log(`My name is ${name}`);  // output: My name is dog
console.log(`1+2 is ${1+2}`);      // 1+2 is 3

//undefined
let age;
console.log(age);   // output - undefined

//null
let count = null;
console.log(count);   // output -- null

//functions
let num1 = 12;
pracFunction(num1);
function pracFunction(num){
    console.log(num);
}
pracFunction(1);
pracFunction('Hello');
// variables declared outside function can be accessed from within function
let result = 20;
function prac(){
    result += 30;
}
console.log(result);
prac();
console.log(result);
result = 0;
prac();
console.log(result);
