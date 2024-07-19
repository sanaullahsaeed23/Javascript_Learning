// Arrays in js

const myArr = [0, 1, 2 , 3, 5]

// javascript arrays are resizeable
// javascript array could store multiple datatypes

// To access any element of above array we use non-negative index of that array
// console.log(myArr[2]);s

// Another way to create array is using Array() object
const arr2 = new Array('a', 'b', 'x', 'z');

// console.log(arr2[3]);

// Some methods are
// arr2.push('y') // push element at the end
// console.log(arr2);
// arr2.pop(); // removes the top element
// console.log(arr2);

// arr2.unshift('c') // insert element at the start of array
// arr2.shift() // removes the first element from array

// Some other methods are: 
// console.log(arr2.includes('o'));
// console.log(arr2.indexOf('z'));

const newArr = arr2.join() // this will combines all elements of array to string (comma separated)

// console.log(arr2);
// console.log(newArr);

// Slice and Splice methods

const an1 = new Array(2,4,6,8,10);
// console.log('A ', an1);

// console.log(an1.slice(1,3));  // returns [ 4, 6 ] ---- gives the element at index 1 and 2 (But doesn't effect the original array)
// console.log('B ', an1); // returns B  [ 2, 4, 6, 8, 10 ]

// console.log(an1.splice(1,3)); //returns [ 4, 6, 8 ] --- gives the element at index 1,2, and 3 (but removes these indexes from the original array and minipulate the original array)
// console.log('C', an1); // returns C [ 2, 10 ]


