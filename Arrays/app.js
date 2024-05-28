let comment = "Hello World!";
console.log(`${comment} from js script.`);


//string
let userName = "Jhon";
let userAge = 24;
//Array
let userHobbies = ["Cooking", "Reading", "Dancing"];
console.log(userHobbies);
//alert(userHobbies);
console.log(userHobbies[0]);



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
let arr = [1,2,3,4];
console.log('pushing and popping into an array.' + arr);
console.log(arr.pop());     // 4
console.log(arr);           // [1,2,3]
arr.push(99,11);
console.log(arr);           //  [1, 2, 3, 99, 11]

//shift and unshift - at the beginning of array
console.log('shiting and unshifting into an array.' + arr);   //  [1, 2, 3, 99, 11]
console.log(arr.shift(1));
console.log(arr);                       // [2, 3, 99, 11]
arr.unshift(12,13);
console.log(arr);                       // [12, 13, 2, 3, 99, 11]
console.log(arr.join("+"));             // 12+13+2+3+99+11

//indexof and includes
console.log(arr.indexOf(3));            // 3
console.log(arr.indexOf(33));           // -1
console.log(arr.includes(3));           // true
console.log(arr.includes(33));          // false

//for loop
let i;
for (i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for (let num of arr) {
    console.log(num);           //prints ele in array arr
}
for (let index in arr) {
    console.log(index);           // prints indices in arr
}

// concat method
let a1 = [1,2];
let a2 = [3,4];
let c = a1.concat(a2);
console.log(c);
c = c.concat("concatenation");
console.log(c);             // [1, 2, 3, 4, 'concatenation']
const d = a1.concat(a2,c);
console.log(d);             // [1, 2, 3, 4, 1, 2, 3, 4, 'concatenation']

//splice()
console.log("using splice method");
const nums = [1,2,3,4,5];
nums.splice(0,0,11,111);        
console.log(nums);              //  [11, 111, 1, 2, 3, 4, 5]
nums.splice(1,2);               // deletes 2 ele from index 1 and returns removed ele
console.log(nums);              // [11, 2, 3, 4, 5]
nums.splice(2);                 // deletes ever ele after index 2   and returns removed ele
console.log(nums);              // [11,2]
nums.splice(0);                 // deletes every ele from 0 and returns removed ele
console.log(nums);
nums.push(1,2,3,4,5,6);
console.log(nums);
nums.splice(-2,1,77);
console.log(nums);             // [1,2,3,4,77,6]
 
//slice()
console.log("using slice method");
const slicednums = nums.slice(1,3);
console.log(slicednums);        // [2, 3]
slicednums.push(44);
console.log(nums, slicednums);  //[1,2,3,4,77,6], [2, 3, 44]
const copiednums = nums;
copiednums.push(33);
console.log(copiednums, nums);  // [1, 2, 3, 4, 77, 6, 33], [1, 2, 3, 4, 77, 6, 33]
const slicednums1 = nums.slice();
console.group(slicednums1);     // [1, 2, 3, 4, 77, 6]
const slicednums11 = nums.slice(-5,-2);
console.log(slicednums11);      // [3, 4, 77]


// indexOf()
console.log(nums);                  // [1, 2, 3, 4, 77, 6, 33]
console.log(nums.indexOf(3));       // 2
console.log(nums.indexOf(3,4));     // -1
console.log(nums.indexOf(33));      // 6
console.log(nums.indexOf(100));     // -1
nums.push(3,11,2,5);
console.log(nums.lastIndexOf(3));   // 7
console.log(nums.indexOf(3));       // 2
const fruits = [{fruit1:'Apple'}, {fruit2:"Mango"}, [1,2,3,4,5],{fruit3:"Papaya"}];
console.log(fruits.indexOf( {fruit2:"Mango"}));     //-1
console.log(fruits.indexOf([1,2,3,4,5]));           //-1

//find()
// console.log(fruits.find([1,2,3,4,5]));








//Objects
let userDetails = {title: 'Developer', place: 'NY', salary: 50000};
console.log(Array.isArray(userDetails));
console.log(userDetails);
console.log(userDetails.title);
console.log(userDetails['title']);
let key = 'name';
userDetails[key] = 'Jhon';
console.log(userDetails);
key = 'languages';
userDetails[key] = ['Python', 'HTML', 'CSS', 'JavaScript'];
console.log(userDetails);
delete userDetails['place'];
console.log(userDetails);
let place = 'place';
userDetails[place] = 'NewYork';
console.log(userDetails);
//takes input from user
let userInput = prompt('What would you like to know about user?');
console.log(userDetails[userInput]);
console.log("New object");
let num1 = 10;
let num2 = 20;
let numbers = {num1, num2};
console.log(numbers);               // {num1: 10, num2: 20}
console.log('num1' in numbers);   // true
console.log(num1 in numbers);      // false
//console.log(num3 in numbers);   // num3 is not referenced error
console.log(numbers['num1']);       // 10
console.log(numbers.num1);          // 10
console.log(numbers.num3);          // undefined
console.log(numbers['num3']);       // undefined
for (let key in numbers){
    console.log({
        key,
        value:numbers[key]
})
}


//this keyword
const customerDetails = {
    name: 'sony',
    year: 1990,
    calcAge: function () {
        console.log(this);                     // {name: 'sony', year: 1990, calcAge: ƒ}
        return 2030 - this.year;
    }
};
console.log(customerDetails.calcAge());     // 40
// customerDetails['year'] = 2000;
// console.log(customerDetails.calcAge());     // 30


























//string
// let multulineString = "multi" +
//                        "line"; 
// let multiString = `multi 
//                     string`;
// console.log(multulineString, multiString);  // when u use backtacks string is printed on console differently

