// Simple decleration of Date is :

const myDate = new Date(); // Object of date
// console.log(myDate);  // returns 2024-07-14T13:48:27.105Z (it's not readable easily, we have to implement some other operations on it for human readability).

// console.log(myDate.toString()); // returns "Sun Jul 14 2024 18:50:45 GMT+0500 (Pakistan Standard Time)"" => much better readablity
// console.log(myDate.toDateString()); // returns "Sun Jul 14 2024"
// console.log(myDate.toISOString()); // returns "2024-07-14T13:52:09.486Z"
// console.log(myDate.toLocaleDateString()); // returns "7/14/2024"
// console.log(myDate.toLocaleString()); // returns "7/14/2024, 6:53:44 PM"
// console.log(myDate.toJSON()); // returns "2024-07-14T13:53:17.506Z"
// console.log(myDate.toUTCString()); // returns "Sun, 14 Jul 2024 13:54:20 GMT"

// ***** toLocalString() *****

// first parameter is for internalization of date
// second is object to more customize your date
formattedMyDate = myDate.toLocaleString('default', {
    weekday: "long",
    // and many more parameters of this object
});


//////// Getting day, month etc
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// and similar much more functions

// ********** Create the specific date ********** ////
const createdAt = new Date(2024, 6, 14);  // this is creating date using array
// console.log(createdAt.toLocaleString()); // returns "7/14/2024, 12:00:00 AM"

const createdAtTime = new Date(2024, 6, 14, 5, 6);
// console.log(createdAtTime.toLocaleString()); // returns "7/14/2024, 5:06:00 AM"

const specialFormat = new Date("2024-09-02");
// console.log(specialFormat.toLocaleString()); // returns "9/2/2024, 5:00:00 AM"

// ********* TimeStamps *************
const timeStamp = Date.now(); // gives current time in miliseconds
// console.log(timeStamp); // returns "1720966543370"

// convert the date to timestamp
// console.log(createdAt.getTime()); // returns "1720897200000"

// convert date to seconds
// console.log(Math.floor(Date.now()/1000)); // gives time in seconds
