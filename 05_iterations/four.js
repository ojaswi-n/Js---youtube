const obj = {
    js: "javascript",
    rb:"ruby",
    cpp:"c++"
}
for (let  in obj) {
    // console.log(`${key} is shortform of ${obj[key]}`);
}

let arr = ["hi","this","is","me","how","r","u"];
for (const key in arr) {
    // console.log(key) // in array there is also keys called as index 0,1,2,3.. 
}

for (const key in arr) {
    // console.log(key ,":>",arr[key])
}
const map = new Map();
map.set("In", "india");
map.set("as","australia")
map.set("ca", "canada"); 
map.set("ca", "comlambia")
for (const key in map) {
    // console.log(key)
}
const subject ={
    sub1:"english",
    sub2:"hindi",
    sub3:"maths",
    sub4:"bio"
}
for(let j in subject){
    console.log(subject[j]) // subject is not iterable
}