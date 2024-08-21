// Immediately Invoked Function Expresseion (IIFE)

/* in our projects our function variables can be diluted/populated by global scope variables, so to overcome this
    we use this concept of IIFE. 
*/

/**
    The syntax of this is like
    (function abc(){})()
    () => these first parentheses the block of function, and function would be declear inside these parenthesis
    () => second parentheses are used to execute the function

    So this concept is known as Immediately Invoked Function Expression
 */

    // Example:

    (function dbConn() {
        console.log("Db Connected");
    })();

    //So this function is executed immediatley after it's declear

    // Important: ******
    // Semicolon is necessary after the execution to terminate the context of this function

// We can also declear arrow IFFE; like:
( () => {
    console.log("Connection two");
} )();

// We can also pass the arguments to IIFE
( ($name) => { // accpet arguments
    console.log("Welcome, ", $name);
} )('Sanaullah');//pass argument from here
