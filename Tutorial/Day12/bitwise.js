// Bitwise Operator

// & (Bitwise AND)
// 1, 0 => 0;
// 1, 1 => 1;
// 0, 1 => 0;
// 0, 0 => 0;

console.log(5 & 4);
// 0101
// &
// 0100
// 0100    
console.log(6 & 8);
// 0110
//   &
// 1000
// 0000

// '|' (Bitwise OR)(if any bit in same place is 1 or both 1 then return 1 else 0)
console.log(6 | 8);
// 0110
//   |
// 1000
// 1110
console.log(5 | 4);

// '^' (Bitwise XOR) (same bit in both place return 0 else 1)
console.log(6 ^ 8);
// 0110
//   ^
// 1000
// 1110
console.log(5 ^ 4);
// 0101
//   ^
// 0100
// 0001

// ~ (NOT or Complement Operator) -(n+1)

console.log(~4);
// 0100
// ~1011


// 5
// 0101
// 1010
//   +1
// 1011

