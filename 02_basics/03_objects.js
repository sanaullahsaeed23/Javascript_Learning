// Singleton 
// Object created by two methods =>
    // Constructor method
    // Object.create();

    const mySym = Symbol("key1");

    // Object Literals
    const jsUser = {
        name: "Sanaullah",
        "full name": "Sanaullah Saeed",
        // adding symbol datatype in object (first create the symbol above)
        [mySym]: "myKey1",  // now it's treating as symbol because of squre brackets around the key and it's refering to above sysmbol instance
        age: 23,
        location: "Islamabad",
        email: "sanaullahsaeed193@gmail.com",
        isLoggedIn: false,
        lastLoginDays: ["Monday", "Saturday"] 
    }

    // Accessing the object
    // Using .
    // console.log(jsUser.email);
    // cannot access jsUser.full name with . operator, for this type of keys squre notion is used
    // using squre brackets and the key as string
    // console.log(jsUser["location"]);
    // console.log(jsUser["full name"]);

    // accessing symbol
    // console.log(jsUser[mySym]); 

    // Overwrite or change the value of object
    jsUser.isLoggedIn = true;
    // console.log(jsUser);

    // Lock the object so that no one can change it
    // Object.freeze(jsUser) // now no changes would be made to this object

    // Adding function in object
    jsUser.greeting = function(){
        console.log("Hello John!");
    }

    // console.log(jsUser.greeting); // returns the reference of function as [Function (anonymous)]
    console.log(jsUser.greeting()); // returns the log in function "Hello John!"

    // getting values of same object in the function
    jsUser.greetTwo = function() {
        console.log(`Hello Js User, ${this["full name"]}`); // using this operator access the object and string interpolation is usec
    }
    console.log(jsUser.greetTwo()); // returns "Hello Js User, Sanaullah Saeed"