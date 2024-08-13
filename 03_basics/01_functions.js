// Functions in js

//  Lets write the function to add two numbers
function addNumbers(n1, n2) {
    console.log(n1 + n2);
}

// calling the function
// addNumbers(2, 5) // returns 7

// But let's say we are storing the function execution in a variable
// const result = addNumbers(4,89)
// console.log("Result: ",result); // returns "Result:  undefined" b/c we are not returning anything from function

// So to achieve this let's create another function 
function multiply(n1, n2){
    const res = n1 * n2
    return res
}

const mul_result = multiply(8, 7)
// console.log("Multiplication: ", mul_result);

function loggedInMessage(username) {
    if(!username){
        console.log("Please provide username");
        return
    }
    return `${username} just logged in`
}

// console.log( loggedInMessage()); // returns "undefined just logged in", b/c we didn't pass any argument
// console.log(loggedInMessage("Sunny")); // returns "Sunny just logged in"


// ******** Advance Concept *********

// Rest operator 
// Rest operator is used to get the unlimited argument from function execution to function definition

function calculateCartPrice(...num1){   // ... is the rest operator => now this function accepts unlimited numbers
    return num1
}

const cartPrices = calculateCartPrice(209, 349,4838, 394)
// console.log(cartPrices); // returns array as " [ 209, 349, 4838, 394 ] "

// *******************   Pass objects in function   *************
const user = {
    name: "Sunny",
    email: "s@gmail.com",
    age: 23
}

function userDetails(userDetailsObject) {
    console.log(`User Name is ${userDetailsObject.name} and email is ${userDetailsObject.email}`);
}
// userDetails(user) // pasing user object to the function

// *******************   Pass array in function   *************
const arr = [239, 53, 544]
function getlastValue(arrayData) {
    // return arrayData.length;
    return arrayData[arrayData.length - 1]
}
console.log(getlastValue(arr));