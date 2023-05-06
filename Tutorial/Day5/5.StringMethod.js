// String Methods
// string to number
// Concatenation
// indexing
// length
// indexOf
// toLowerCase,toUpperCase,
// trim
// charCodeAt
// split
// slice



let str1 = "123";
console.log(typeof str1);

// str=Number(str)
str1 = +str1;

str1;
console.log(typeof str1);


str1 = str1 + "";

console.log(typeof str1);

// Concatenation


let str2 = "carry";
let str3 = "coder";
// let num1=123
// 1st method
str2 = str2.concat(str3);

str2;


// 2nd Method

let str4 = "Carry";
let str5 = "Coder";

str4 = str4 + " " + str5;

str4;

// indexing

let name = "CarryCoder";


// C a r r y C o d e r

// 0 1 2 3 4 5 6 7 8 9

console.log(name[3]);

// length

console.log(name.length);


// find indexNumber of Character

console.log(name.indexOf('C', 2));

console.log(name.indexOf('a'));


// toLowerCase
name;

console.log(name.toLowerCase());


// toUpperCase 

name;

console.log(name.toUpperCase());


// trim (remove space from a string )

let strSpace = "   Ram Ram    ";

console.log(strSpace.length);

strSpace = strSpace.trim();

console.log(strSpace.length);


// slice
name;
console.log(name.slice(0, 5));

console.log(name.slice());

console.log(name.slice(0));

let nameTwo = name.slice();


// charCodeAt(indexNumber)


// ASCII

// '0' -> 48
// '1' -> 49
// '2' -> 50
// '3' -> 51
// '4' -> 52
// '5' -> 53

name;

console.log(name.charCodeAt(2))



















