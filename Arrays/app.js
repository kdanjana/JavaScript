let comment = "Hello World!";
console.log(`${comment} from js script.`);


//Arrays
let a = new Array;
console.log(a, typeof a, Array.isArray(a));
let b = [];
console.log(b, typeof b, Array.isArray(b));
let exArray = [1,2,3,4];
console.log(exArray[exArray.length - 1]);
console.log(exArray.at(-1));
console.log(exArray.at(0));
console.log(exArray[7]);    // output : undefined
exArray[66] = 12345;        
console.log(exArray);       // output: [1, 2, 3, 4, empty × 62, 12345]
//push and pop - done at end of array
console.log('pushing and popping into an array.')
console.log(exArray.pop());
console.log(exArray);
console.log(exArray.push(99));
console.log(exArray);


//string
let userName = "Jhon";
let userAge = 24;
//Array
let userHobbies = ["Cooking", "Reading", "Dancing"];
console.log(userHobbies);
//alert(userHobbies);
console.log(userHobbies[0]);
//Objects
let userJob = {title: 'Developer', place: 'NY', salary: 50000};
console.log(Array.isArray(userJob));
console.log(userJob);
console.log(userJob.title);

let adultYears = userAge - 18;
console.log(adultYears);


























//string
// let multulineString = "multi" +
//                        "line"; 
// let multiString = `multi 
//                     string`;
// console.log(multulineString, multiString);  // when u use backtacks string is printed on console differently

