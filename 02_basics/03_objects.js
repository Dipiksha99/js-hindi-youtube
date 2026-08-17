// singleton (construction se banega to singleton hoga)
// Object.create

// object literals (object ko declear karne ka tarika)

const mySym = Symbol("Key1")


const JsUser = {
    name: "dipiksha",
    "full name": "Hitesh Choudhary",
    mySym: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays: ["monday", "Saturday"]
}  // {} is this a object

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);
