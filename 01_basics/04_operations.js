// ***************** Operations ************

// Some common operations are are

// console.log(2+2); //addition
// console.log(2-2); //substraction
// console.log(2*2); //multiplication
// console.log(2**3); // power 2 raise to the power 3
// console.log(2/2);  // divsion
// console.log(2%2);  // reminder

// *** srings concate

let str1 = 'Hy'
let str2 = ' Sanaullah'

let str3 = str1 + str2
// console.log(str3); // returns "Hy Sanaullah" => because + is used for string concatination in javascript

// But there will be problem with some expressions, like:
console.log("1" + 2); // returns 12
console.log(1 + "2"); // returns 12
console.log(1 + "2" + 2); // returns 122
console.log("1"+ 2 + 2); // returns 122

console.log(1+ 2 + "2"); // returns 32 => here it first does addition of 1+2 then do string concatenation with "2"

