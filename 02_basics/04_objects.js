// singleton (construction se banega to singleton hoga)
// const tinderUser = new Object()  //is this singleton object
const tinderUser = {} //this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// objects ke ander objects declear karenge
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "dipiksha",
            lastname: "chaudhari"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname); 
// //sometime it give this syntax 'fullname?' ye protection create kar deta hai supose fullname exits hi nhi karata ho to. kai bar 'api' se response ata hai to agar hai value hai to kariye  otherwise if else har jagah lagna padega [or if else vala complex hai]

const obj1 = {1: "a", 2:"b"}  //keys ko lete hai numbers and values ko lete hai string
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}


// const obj3 = {obj1 , obj2 }
// console.log(obj3)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// object assign : documentation -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const obj3 = {...obj1,...obj2}
// console.log(obj3);  //above curly bracket  is a traget

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


// Objects destructuring and JSON API
// destructuring:

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
