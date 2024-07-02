const name = "Sanaullah"
const repoCount = 50;

// One way to concatenate the strings is this, but it's old method
// console.log(name + repoCount + ' is my repo Count');

// In modern js the strings are written in backticks and variables are injected using ${}
// console.log(`My name is ${name} and my repo count is ${repoCount}`);

// Another way to declear string is
const name2 = new String('GulAhmad');
// console.log(name2); // returns object as String i.e. [String: 'GulAhmad']
/* But if see it in browser console it's returning us the string's each character as key-value-pair, and also
    along wiht it many other methods to apply on that string

    // ****** Returns something like this
                    String {'GulAhmad'}
                    0: "G"
                    1: "u"
                    2: "l"
                    3: "A"
                    4: "h"
                    5: "m"
                    6: "a"
                    7: "d"
                    length: 8
                    [[Prototype]]: String
                        anchor: f anchor()
                        at: f at()
                        big: f big()
                        blink: f blink()
                        bold: f bold()
                        charAt: f charAt()
                        charCodeAt: f charCodeAt()
                        codePointAt: f codePointAt()
                        concat: f concat()
                        constructor: f String()
                        endsWith: f endsWith()
                        fixed: f fixed()
                        fontcolor: f fontcolor()
                        fontsize: f fontsize()
                        ...
*/
// To get any key value
// console.log(name2[3]); // returns 'A'

// To fetch the functions of this String Object
// console.log(name2.length); // returns length of stirng
// console.log(name2.charAt(2)); // returns character at that index
// console.log(name2.indexOf('h')); // returns index of any given character

// // Get substring from any string
// console.log(name2.substring(0, 5)); // returns "GulAh"

// Trim whitespaces and line terminators
// const newString = "      abc@gmail.com      "
// console.log(newString);  // returns "      abc@gmail.com    "
// console.log(newString.trim()); // returns "abc@gmail.com"  => removed whitespaces

// Replace() function
const url = "https://sanaullah.com/portfolio%20web"
console.log(url.replace('%20', '-')); // returns "https://sanaullah.com/portfolio-web" => replaced %20 with -

// Includes => returns ture OR false (it checks that whether given stirng is present in main string or not)
console.log(url.includes('sanaullah')); // returns true
console.log(url.includes('sunny')); // returns false