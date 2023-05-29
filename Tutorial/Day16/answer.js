// variable

let a = 10;
let b = 20;

console.log(a + b);

console.log(a - b);

a = a + "";

console.log(typeof a);

// console.log(typeof b.toString())

console.log(typeof String(b));


console.log(isNaN(12));

console.log(isNaN("12a"));

// use falsy values using ternary operator

let dob = "20/10/2002";

dob === undefined ? dob = "01/01/2002" : dob;

console.log(dob);