// Some general comparisons are:

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

/* But when two different datatypes are compared in javascript, this will create problem
 Sometimes comparison of different datatypes do not produce the expected results. So it's recommended that must 
 check the datatype before doing comparison */

//  console.log("2" > 1); // js may convert the string to number before conversion but may be sometimes in complex
                        //  situations it doesn't do it.
// console.log("02" > 1)

// ********** An Interesting Fact ***********

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
/* The reason for above comparison is equality check '==' and comparison check '<,>,<=, >=' works differntly.
    Comparisons convert null to a number, treating it as 0 that's why (null > 0) is false and (null >= 0) is true. */

    // ******** Strict Check ******* ///
    // Strict check is '===', This will check values and also the datatypes of the variables
    console.log("2" == 2); // returns true => it's doesn't check datatype, conversion happens here
    console.log("2" === 2); // returns false => it's also checking datatype