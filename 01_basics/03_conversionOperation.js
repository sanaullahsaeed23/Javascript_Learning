// Number conversion is little bit confusing/tricky in javascript

let score = "33" // its a string

// ******* Conversion to Number ******** ///

// If we want to convert it to number, we can
let valueInNum = Number(score)  // convert string to number
console.log(typeof valueInNum); // returns number
console.log(valueInNum); // returns 33
// This is converted accurately

// Now lets see another case
let score2 = "33abc" // string - may be this is coming from an input field an typed by user

// If we want to convert it to number, we can
let valueInNum2 = Number(score2)  // convert string to number - as our string doesnt have proper number but still it will convert it to number
console.log(typeof valueInNum2);  // returns number
console.log(valueInNum2); // returns NaN => because our string is not a proper number

// Number Conversion of different datatypes

// summary is 
// Number : "33" => 33 (converted ot number)
// String : "33abc" => NaN (Not a number)


// ******* Conversion to Boolean ******** ///

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); // returns boolean
console.log(booleanIsLoggedIn); // returns true - converted to boolean

// so, the summary is 
/*
    1 => true
    0 => false
    "" => false
    "abc" => true
*/


// ******* Conversion to Strings ******** ///

let mathScore = 34

let stringMathScoer = String(mathScore) // convert number to string
console.log(stringMathScoer); // returns 33
console.log(typeof stringMathScoer); // returns string

// so in this way numbers could be converted to stirngs 