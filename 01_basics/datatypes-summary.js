// primitive 

// 7 types: String , Number, Boolearn, null, Undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



//  Reference(Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"dipiksha",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);   

// https://262.ecma-international.org/5.1/#sec-11.4.3   (detail learn on this website for js datatypes)



// +++++++++++++++++++++++++++++++++++++++++
//    **********memory************
// Stack (Premitive), Heap (Non-Primitive)



// primitive values are go to the stack. In this stack we take any value they give always **copy**

// non-Primitive values are go to the heap. In this heap we put any value they give always **reference** of this value




let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);