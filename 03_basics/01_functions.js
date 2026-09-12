// function ka meaning:- jo bhi aapne 10/5/20 lines ka jo bhi code likha hai uske ek package mai band kar dena...jaha cahai vah hum package ki copys ka  use kar sakte hai
// example:-

// syntax:
function sayMyName(){  //function (keyword hai), saymyname(name diya hai), () ye (function ka syntax hai), {} ye function
    console.log("D");
    console.log("I");
    console.log("P");
    console.log("I");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
}    //ye func ka hai defination

// sayMyName  //[ye hai reference]
// sayMyName()    //sayMyName [ye hai reference], () [ye hai execute]

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers() //CALL function
// addTwoNumbers(3, 4)  // argument : function call karte time jo number pass hote hai use arguments bolate hai 
// addTwoNumbers(3, "4")  // argument (int,string)
// addTwoNumbers(3, "a")  // argument 
// addTwoNumbers(3, null)

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result =  number1 + number2
    // return result 
    return number1  + number2
}
const result = addTwoNumbers(3, 5) 

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
    // if(username === undefined){
        console.log("Please enter a username");
        return
    // }
    }
    
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh"))
