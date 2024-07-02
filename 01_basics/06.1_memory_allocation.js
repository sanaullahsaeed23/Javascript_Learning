/* Two types of memory 
    1. Stack
    2. Heap

    Primitive datatypes use *Stack* memory (it returns copy of variable), so if we change the value the value of copied will change and original remain same
    Non-primitive datatypes uses *Heap* memory (it returns the memory reference of that variable/object/function)

    // 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint



// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
*/

// ****** Example - Primitive Datatype (Stack Memory) ****

let name1 = "Ali"
let name2 = name1  // Now here copy of name1 is generated in memory and that is assigned to name2
// so lets change value of name2
name2 = "Ahmad"
// Log both
console.log(name1); // returns 'Ali' because it's copy was assigned to name2 and actual value is still there in memory
console.log(name2);

// ****** Example - Non-premitive Datatype (Heap Memory) ****
let userOne = {
    email: 'abc@gmail.com',
    password: '1234',
}

// assign userOne to other object
let userTwo = userOne

// Now lets change the email of userOne obj
userOne.email = 'xyz@gmail.com'

console.log(userOne.email); // returns 'xyz@gmail.com'
console.log(userTwo.email); // returns 'xyz@gmail.com'
/* both returns 'xyz@gmail.com', because heap has reference of other object and when it's changed to one obj the actual value at 
    that memory reference changed and it'll changed for all objects
*/