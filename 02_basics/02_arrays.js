// ************ Arrays Part 2 ******************


// Pushing and Concat two arrays
const classes = ['nursery', 'prep', '1st']
const subjects = ['English', 'Isl', 'GK']

// classes.push(subjects);

// console.log(classes); // [ 'nursery', 'prep', '1st', [ 'English', 'Isl', 'GK' ] ] 
// it push array inside array, subjects array is now an elemnent in the classes array

// concat merge two arrays and returns the new array
const classes_subjects = classes.concat(subjects)
console.log(classes_subjects); // returns [ 'nursery', 'prep', '1st', 'English', 'Isl', 'GK' ]

// Alternative of concat function is "Spread Operater (...)"
const new_cls_sub = [...classes, ...subjects]; // Advantage of this is that we can combine multiple arrays with this.
console.log(new_cls_sub); // returns [ 'nursery', 'prep', '1st', 'English', 'Isl', 'GK' ]

// Make array from srting or objects
const str_1 = "Sanaullah"
const arr_from_str = Array.from(str_1)
console.log(arr_from_str);  // returns ['S', 'a', 'n','a', 'u', 'l','l', 'a', 'h']

// Make array from multiple elements
let s1 = 100;
let s2 = 200;
let s3 = 300;

const arr_from_nums = Array.of(s1, s2, s3);

console.log(arr_from_nums); // returns [ 100, 200, 300 ]
