// 1 # Primitive DataType

// 7 types : String, Number, Boolean, null, undefined, symbol, Bigint

const score = 100
const scorevalue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id  = Symbol('123')
const anotherId  = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 334467456756756767678n  // Bigint


/* _________________________________________________________________________________________________ */

// Reference Non Primitive

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]

let myObj ={
    name: "virat",
    age: 22,
}

// function() {}  // function syntex

const myFunction = function() {         // function store in variable
 console.log("hello world");

}

console.log(typeof bigNumber);
console.log(typeof anotherId);


// Two Type Of Memory 
// ist Stack (Primitive)
// Heap (Non- Primitive)

let myName ="atulsolanki"

let anotherName = myName
anotherName= "helloatul"

console.log(anotherName);

console.log(myName);

let userOne = {
    email: "abc@googl.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email= "hello@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
