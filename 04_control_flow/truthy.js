const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// nullish coalescing Operator (??) :null  undefined

let val1 ;
// val1 = 5 ?? 10 // o/p -> 5
// val1 = null ?? 10 // 0/p-> 10
// val1 = undefined ?? 20 // o/p-> 20
val1 = undefined ?? 20 ?? 10 // o/p-> return 1st value 


// console.log(val1); // 


// ++++ ternary Operator
// condition ? true : false;