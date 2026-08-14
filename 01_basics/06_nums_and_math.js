const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  //mthods of numbers
// console.log(balance.toFixed(1));  //mostly ussed this method

const otherNumber = 123.8699  //23.89665

// console.log(otherNumber.toPrecision(3)); //most 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //indian number ke hisab se comma lagayenge

// ++++++++++++++ Maths  ++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //abs means absolute they can change -ve value into +ve value.(+ve no. +ve rehata hai & -ve convert hota hai +ve mai)
// console.log(Math.round(4.6)); //decimal value ko round of value mai convert karke do
// console.log(Math.ceil(4.6)); // ceil matalb top value
// console.log(Math.floor(4.9)); // floor matlab niche vali value used hoga
// console.log(Math.min(4,3,8,6,9)); //minimum value
// console.log(Math.max(4,3,8,6,9)); //maximum value

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

Math.random() + (max - min + 1)
console.log(Math.floor(Math.random()*(max -min+1))+min)