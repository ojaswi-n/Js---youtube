const arr = [1,2,3];
// console.log(arr[0]);
const arr1 = ["ojaswi","lily","severus"]
const arr2 = new Array(1,2,6,7);
// console.log(arr2);
// methods => push,pop,slice,splice,unshift,
let arr_unshift  = arr.unshift();
arr.unshift(5)
// console.log(arr)//[5,1,2,3];
arr.shift()
// console.log(arr);//[1,2,3]
arr.shift()
// console.log(arr)//[2,3]
// console.log(arr.includes(1))
arr.push(1);
arr.push(5);
arr.push(8);
// console.log(arr.includes(1));
// console.log(arr.indexOf(1))
// console.log(arr)
const newarr = arr.join()
// console.log(newarr);
// console.log(typeof newarr)

let arrr  = [0,1,2,3,4,5]
let slice_arr = arrr.slice(1,3) //[1,2]
console.log(slice_arr)//[2]
console.log(arrr)//[2,3,1,5,8]

let splice_arr = arrr.splice(1,2);//[1,2]
console.log(splice_arr)//[2,3,1]
console.log(arrr)//[5,8]