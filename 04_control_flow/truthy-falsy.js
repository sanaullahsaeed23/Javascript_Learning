// Concept of Truthy and Falsy Values

const userEmail = 's@gmail.com'

if(userEmail){  /// here it's the truthy value
    console.log("Got user Email");
}else {
    console.log("Didn't get the email");
}

// Some of the truthy and falsy vlaues are:

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN (all these are falsy values, means these values will be considerd as false)


// Truthy values (Some truthy values are)
// "0", 'false', " ", [], {}, function(){}, 



//  ********* NUll Colescing Operator (??) it works on null and undefined situation
// if value is null or undefined then pick the second condition

let val1, val2;
// val1 = 5 ?? 10;
val1 = null ?? 20;
val2 = undefined ?? 30


console.log(val1);
console.log(val2);


// *** Ternary Operator
conditon ? true : false;