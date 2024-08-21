// Use of "this" variable
// 'this' keyword is used to refer to the current context

const user = {
    username: 'sunny',
    password: '12341234',
    welcomeMessage: function(){
        console.log(this.username, 'welcome to the website'); // this is used to get username from this context
        console.log(this);
        // returns {
                //   username: 'sunny',
                //   password: '12341234',
                //   welcomeMessage: [Function: welcomeMessage]
                // }
    }
}

// user.welcomeMessage()  // returns "sunny welcome to the website"

// an interesting thing is
// console.log(this);  // returns "{}" an empty object
// the empty string is returned in node enviornment. If we run this in browser, then the result of this is "Window{}"
// object. because in javascript Window{} is super global object with so many properties and methods


// Lets create the function
function printThis(){
    console.log(this); // returns huge global vlaues, microservices, fetch function, etc
}
// printThis() 



/// ****************** Arrow Functions **************

// syntax of arrow function is: () => {}

// Basic arrow function is:  - Explicit return

// let fun1 = () => {
//     const username = 'sunny'
//     console.log(this.username); // returns "undefined", because in function this context is not applicable to it's own varibales
// }
// fun1()

// Another way to declear arrow function i by using "Implicit Return"
// If you have only one line statement in the function then syntax would be
const addTwo = (num1, num2) => num1 + num2 // it's completely a function, no need to write {} and return statment

// Or another method is
const addThree = (num1, num2) => (num1 + num2 + 5) // wrap result in brackets

// call 
// console.log(addTwo(4,9) );
console.log(addThree(4,9) );

// So the conclusion is:
// If curly braces are used in function then we have to use "return" keyword, else no neeed to use return