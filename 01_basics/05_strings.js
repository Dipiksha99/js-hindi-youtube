const name = "dipiksha"
const repoCount = 50

// console.log(name + repoCount + " Value");  // it's not a  better way
// string ko concanicate karne ke liye **backticks(`${}`)** ka use kare 
console.log(`Hello my name is ${name} and mye repo count is ${repoCount}`); // ise string interpolation kahate hai

const gameName = new String('shit-al-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());  // string ko upper case mai convert karenge
// console.log(gameName.charAt(2));  //kis index pe konsa character hai vo check karne ke liye charAt use karte hai
console.log(gameName.indexOf('t'));  //konsa character konse position pe hai vo pata karne ke liye indexOf ka use karete hai

const newString = gameName.substring(0,4)    //last value are not included.
console.log(newString);

const anotherstring = gameName.slice(-6,4)
console.log(anotherstring);

const newStringone = "   dipu   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))   //ye replace karne ke liye used hota hai


console.log(url.includes('hitesh'));
console.log(url.includes('sundar')) // key word hai ya nhi vo check karne ke liye hum usase question puch sakate hai
console.log(gameName.split('-'))