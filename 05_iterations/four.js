const obj = {
    js: "javascript",
    rb:"ruby",
    cpp:"c++"
}
for (const key in obj) {
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
    console.log(key)
}
