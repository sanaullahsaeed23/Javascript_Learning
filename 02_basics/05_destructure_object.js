const carDetails = {
    carName: "Mercedes-Benz G-Class",
    model: "2025",
    expectedprice: "$149,400",
    seatingCapacity: 5,
}

// destructuring object
// lets get the price
const {expectedprice} = carDetails 
// this means that get the expectedprice from carDetails object and now we can use it
console.log(expectedprice);

// we can also set the object property to new variable like
const {seatingCapacity: capacity} = carDetails
// seating capacity property is assigned to capacity variable
console.log(capacity);

// json format
{
    "name": "Sunny",
    "age": 23,
    "email": "s@gmail.com"
}