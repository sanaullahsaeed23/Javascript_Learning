// Variables could be decleared with three patterns
// i.e. const, let, and var

const accountId = 43343 // const variables cannot be changed further belwo in the code
let accountName = "Sanaullah Saeed"
var accountPassword = "12345"
accountCity = "Islamabad"

// If we declear the variable without assigning it value then javascript will declear it as undefined
let accountState;

/*
Preferred way to declear the variables is to use let and const. 
-> Var is not recommended because of block scope and functional scope. Var is not accessible out of scope.
*/

// accountId = 2 // this is not allowed. This will give error "TypeError: Assignment to constant variable."
accountName = "Sunny"
accountPassword = "4321"
accountCity = "Mansehra"

console.log(accountId); // log the single vairable

// Log all variables in tabular structure
console.table([accountId, accountName, accountPassword, accountCity, accountState])