// Ternary Operator or Conditional Operator


// syntax -> condition ? expression1 : expression2


let num = 100;

let numTwo = 1;

console.log(num >= 100 ? "Big" : "not Big");

console.log(num > 100 || num == 100 ? "Big" : "not Big");

console.log(numTwo >= 0 ? "Positive" : "Negative");


// nested Ternary Operator
numTwo = 0;

console.log(numTwo >= 0 ? (numTwo === 0 ? "zero" : numTwo) : "Negative");