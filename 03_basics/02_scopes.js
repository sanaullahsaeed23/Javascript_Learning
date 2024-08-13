// There are two scopes
// 1. Local scope
// 2. Global scope

// The global scope is for the whole file.
let var1=500;

// For example
if (true) {
    // This is the block scope

    // Following are the some methods to create variables in js
    let var1 = 10;
    const var2 = 20;
    var var3 = 30;
    var4 = 40;
}

// Now if i want to access those block scope variables outside the block
// console.log(var1); // returns "var1 is not defined"
// console.log(var2); // returns "var2 is not defined"
// console.log(var3); // returns "30"
// console.log(var4); // returns "40"

// var is the global variable, and not defining datatype makes variable global
// so that's why it's not the good approach to use "var" and "not defining" datatype

/* If the defined variable is for any specific scope then it should be accessible in that scope only, if you want to
    access it globally, then you have to declear the global variable for it
*/
// To change the value of the global scope variable in block we can do this:
let var5 = 700;
if (true) {
    var5 = 1000; // changing the value of global variable
    // but if we use let or const with var5 again like
    // let var5 = 1000; // then it becomes the variable for this block scope and not accessible outside of it
}
console.log(var5); // returns 1000

