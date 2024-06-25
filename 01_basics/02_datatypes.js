/* Javascript has different versions. In older versions there are no concept of classes, modules, etc. But in modern 
javascript classes and modules are present. So to inform our enginer about new version we can use below format
*/

"use strict" // treat all code as newer version

// alert(3+3)  // as we are using node, so we cannot use alert in node. It can be used in Document or Dom.

//  ******** Documentation ********* 

/* Official Documentation: https://tc39.es/ecma262/
    This documentation is official docuemntation of js by ECMA Script but little bit complex
*/

/*
    mdn Documentation: https://developer.mozilla.org/en-US/docs/Learn/JavaScript
    This is the more structrued and easy to understand documentation of js
*/

// ************* DataTypes ****************

// number => its range is 2 the power 53
// bigInt
// string => ""
// boolean => true/false
// null => it's the standalone value
// undefined => value not assigned
// symbol => used for uniquness

// object => will be discussed

/* **** The typeof of null is "Object"
    Other datatypes have same typeof as their names but null is and object
*/

console.log(typeof null); // returns object
console.log(typeof undefined); // returns undefined
console.log(typeof 23); // returns number
console.log(typeof "sunny"); // returns string
console.log(typeof false); // returns bollean


