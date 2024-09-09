// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log("Value is: ", index);
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log("Table of: ", i);
//     for (let j = 1; j <= 10; j++) {
//         // console.log("Inner loop value: ", j);
        
//         // Printing the table of numbers
//         console.log(i + '*' + j + ' = ' + i*j);   // table from 1 to 10
//     }
    
    
// }


/// Applying loop on array
const myArr = ['a', 'b', 'c', 'd'];
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}



// ************* Break and Continue  ***********

// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log('5 Detected');
//         break;
//         // when it reaches to 5, the loops will get break and the flow jumps out of loop
//     }
//     console.log('Value: ', index);    
// }

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log('5 Detected');
        continue;
        // when it reaches to 5, that value is skipped from the flow and flow jumps to 6
    }
    console.log('Value: ', index);    
}