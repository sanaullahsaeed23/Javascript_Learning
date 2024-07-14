// Numbers and Maths in Javascript

// One way to define the number is:
    const score = 800 // here js automatically assumes that this is typeof number
    // console.log(score); // returns 800

// Another way to define a number is, using Number Object to explicity tell js that the variable is a number
    const balance = new Number(590);
    // console.log(balance); // returns [Number: 590]
    // In console it will also give us some other properties/methods related to number Object

    // some properties are: 
    
    // toFixed() is used to give numbers after decimal point
    // console.log(balance.toFixed(2)); // retruns 590.00

    // toPrecision() => precise or focus on the vlaues given inside the method of toPrecision()
    const num1 = 23.4344
    // console.log(num1.toPrecision(3)); // returns 23.4 because focus is only on 3 numbers

    const num2 = 223.7944
    // console.log(num2.toPrecision(3)); // returns 233 because focus is only on 3 numbers (misses after points)
    // console.log(num2.toPrecision(4)); // returns 233.8 because focus is only on 4 numbers so it returns 1 number after decimal point
        // and round off the numbers after decimal



        // ************************** Maths in JS ***********************************/////////

        console.log(Math); // retruns an Object of [Math] and it's other properties and methods
    // Math libaray in js has alot of properties and methods that we can use. like Math.PI => give value of Pi 
    // and same like methods that it provides
    
    // Some examples of Math library are:

    // console.log(Math.abs(-4)); // returns absolute of any negative number
    // console.log(Math.round(4.6)); // round of any decimal numbers
    // console.log(Math.ceil(4.3)); // gives the top value from decimal => here it returns 5 because it's greater than 4 so it return top value of 4
    // console.log(Math.floor(4.8)); // gives the bottom value from decimal => here it returns 4 
    // console.log(Math.sqrt(625)); // gives squre root of number
    // console.log(Math.pow(4, 3)); // gives power of any number
    // console.log(Math.min(3,5,2,8)); // returns min number from array
    // console.log(Math.max(3,5,2,8)); // returns max number from array


    // *********** Math.random() *****
    // console.log(Math.random()); // it always returns some random value between 0 and 1  

    // console.log((Math.random() * 10) + 1) // * 10 used to get integer at the left and + 1 is used to avoid getting 0 in result
    
    // So if we want to take the random values between any range then:
    const min = 5;
    const max = 15;

    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    /*
        Math.random() => gives any random b/w 0 and 1
        (max - min + 1) => (max - min) gives range and + 1 is used to avoid 0 in result
        Math.floor() => the value is in decimal so it will take the bottom value means value at left of decimal
        adding min again will give us the number between that range
    */
    console.log(randomInt);