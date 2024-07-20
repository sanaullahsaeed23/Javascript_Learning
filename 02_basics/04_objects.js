// Objects - Part-2

// Singleton Objects 
// creating nested objects

    const userinfo = {
        name: "Sanaullah",
        fullName: {
            firstname: "Sanaullah",
            lastName: "Saeed"
        },
        email: "s@gmail.com",
        isLoggedIn: false,
    }

    // console.log(userinfo.fullName.firstname); // we can access this in this way

    // Merge two objects
    const obj1 = {1: 'a', 2: "b"}
    const obj2 = {3: 'c', 4: "d"}

    const obj3 = Object.assign({}, obj1, obj2);  // empty brackets are used for the saftey purpose that it should return the object
    // console.log(obj3); // returns { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

    // Spread operator can be used to merge the objects
    const obj5 = {...obj1, ...obj2}
    // console.log(obj5);

    // Getting all the keys and values of the object
    const allKeys = Object.keys(userinfo);
    console.log(allKeys); // return [ 'name', 'fullName', 'email', 'isLoggedIn' ]
    // intersting part is that it returns the array, now we can use this array to loop over it and use it fro many purposes.

    console.log(Object.values(userinfo)); // gives the values of object in array datatype