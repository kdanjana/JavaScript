//primitive data types - Number, String, Boolean, BigInt, undefined, null, Symbol

//undefined-- value is not assigned to variable
let x;
console.log(x);    // undefined
function f(){
    console.log("inside fn")
}
console.log(f());   // undefined

//null  -- explicitly assigning null value to variable
let y = null;
console.log(y);     // null
let ob = { a : null};
console.log(ob["a"]);   // null


//BigInt
let bignum = 123345234123333234234123n;
let num1 = 123345234123333234234123;
console.log(bignum);  //123345234123333234234123n
console.log(num1);  //1.2334523412333324e+23


//Symbol--- immutable and unique
let s1 = Symbol("hello");
console.log(s1);  // Symbol(hello)
let s2 = Symbol("hello");
console.log(s1 === s2);  // false
let person = {
    name: "Jack"
};
// creating Symbol
let id = Symbol("id");
person[id] = 12;
console.log(person);   // { name: 'Jack', [Symbol(id)]: 12 }


//non-primitive datatypes --- objects and arrays

//Object
let per = {
    name: "sony",
    age: 23,
    langs: ['python', 'javascript'],
    address:{
        city: "ny",
        country: "usa"
    }
}
console.log(per.name, per["name"], per.address.city, per.langs[1]);
let on1 = new Object();
on1.name = "spotty";
console.log(on1);  // { name: 'spotty' }


//Arrays
let a = [];
let b = new Array();
let c = new Array(1,2,3,4,"abc", "def");
console.log(a, b, c);
console.log(a[6]);  // undefined
let d= new Array(3); // 3 is size of array
console.log(d);  // [ <3 empty items> ]
console.log(d[1]);  // undefined
console.log(d[8]); // undefined
let size = 9;
let a1 = new Array(size);
console.log(a1);  // [ <9 empty items> ]
a1[4] = 4;
console.log(a1);  // [ <4 empty items>, 4, <4 empty items> ]



//const -- used to define data that cannot be changed
// let --- used to define data that can be changed and reassigned later



const name1 = "a1";
const obj1 = {
    name1: "a2"
};
console.log(name1, obj1.name1);


//terenary operator
let age1 = 20;
let canDrive = age1 >= 18 ? true : false;
console.log(canDrive);
let points = age1 >= 19 ? 100: 10;
console.log(points);



//closures
function f1(a){
    let count = 0;
    function f2(){
        count ++;
        a ++;
        console.log(a);
        return count;
    }
    return f2;
}
const cl = f1(10);
console.log(cl());   // 11, 1
console.log(cl());   // 12, 2

let cl2 = f1(20);
console.log(cl2());  // 21 1
console.log(cl2());   // 22 2




//primitive data types -- immutable
let n1 = 10;
let n2 = n1;
n1 = 11;
console.log(`n1 is ${n1}, n2 is ${n2}`);