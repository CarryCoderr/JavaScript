// Numbers Method
// Number
// toString()
// parseInt
// parsefloat
// toExponential()
// toFixed()
// toPrecision()

// number

let numOne = "1234.123";
console.log(typeof numOne);

numOne = Number(numOne);

console.log(typeof numOne);

numOne;

// toString


let numTwo = 1234;

numTwo = numTwo.toString();

console.log(typeof numTwo);


// parseInt

let numThree = "1444.43435";

numThree = parseInt(numThree);

console.log(numThree);


// parsefloat


let numFour = "1444.66666";

numFour = parseFloat(numFour);

console.log(numFour);


// toExponential

let numExpo = 12344;

numExpo = numExpo.toExponential();

numExpo;

console.log(typeof numExpo);

// 1.23 e--> 10^2

// 1.23 * 100;
// 123

// toFixed


let numFix = 12.34345;


console.log(numFix.toFixed());


// toPrecision

let numPre = 12.34345;

console.log(numPre.toPrecision(3));
numPre = numPre.toPrecision(3);

console.log(typeof numPre)



