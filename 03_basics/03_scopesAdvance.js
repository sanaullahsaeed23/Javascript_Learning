// Lets' understand the scope with functios

function parent(){
    let username = "sanaullah"
    function child(){
        let portfolio = "abc.com"
        console.log(portfolio);
        console.log(username);  // username is accessible here, b/c for this function it's in the global scope
    }
    // console.log(portfolio); // portfolio is not accessible here, b/c we cannot access the child() variables outside the scope
    console.log(username);

    // execute the child
    child();
}

//execute parent
parent();

// same scope levels goes with loops



// ******************** Hoisting Concept *********

// We can declear functions in js in many ways;  2 important are
// simple functions declerations and expression way

//lets call funciton first and then declear it
console.log( addOne(4));  // function is accessible 
function addOne(num) {
    return num + 1;
}

// lets call another function

// console.log(addTwo(8)); // returns "ReferenceError: Cannot access 'addTwo' before initialization", because we are assigning it to the variable

// declear expression funciton
const addTwo = function (num) {
    return num + 2;
}

console.log(addTwo(8));  //   returns "10"

// So this concept is known as "Hoisting"