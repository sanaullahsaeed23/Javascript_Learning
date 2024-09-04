/*

There are two main execution contexts in javascript.
1. Global Execution Context
2. Functional Execution Context

1=> When jS code is executed, the code is passed to Global EC and in it it's passed to "this" variable


**** Javascirpt code executed in the two phases:
1. Memory Creation Phase
2. Execution phase

1=> In this phase all declerations, like variables, etc allocated to memory.
2=> Execution of js start here


*/

// ******************* An Example to understand all this: ******************

let val1 = 10;
let val2 = 15;

function addNum(val1, val2){
    let total = val1 + val2;
    return total;
}

let result1 = addNum(val1 + val2)
let result2 = addNum(20, 38)

// *********** Let's see how this code would be executed  ***********

