let f = ["aloo","potato","tomato"]
let s = ["circle","square","triangle"]
// console.log(f.push(s))
// console.log(f[3][2])
// console.log(f.concat(s))
// console.log(f)

let g = ["gobi","muli"]
let new_addedarrays = [...f,...s,...g]
// console.log(new_addedarrays)

let arr = [1,2,4,[4,6,8],[6,7,7,[7,7,7,7,[777]]]]
let newarr = arr.flat(Infinity)
// console.log(newarr)

console.log(Array.isArray("oajswi"))

console.log(Array.from("ojaswi"))
console.log(Array.from({name:"ojaswi"}))// returns [] 
console.log(Array.of(f,s,g))