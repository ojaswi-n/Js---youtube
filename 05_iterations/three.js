// for of
const arr = [1,2,3,3,4,4,5];
for(const i of  arr){
    // console.log(i)
}
const name = "ojaswi";
for( const n of name){
    // console.log(`the words are ${n}`)
}

///Maps 
const map = new Map();
map.set("In", "india");
map.set("as","australia")
map.set("ca", "canada"); 
map.set("ca", "comlambia")
// order remains same , same values aren't repeated 

// console.log(map)

for(const [key,value] of map){
    // console.log(key ,':->', value)
} 

const myobj = {
    'name' : " kaadu",
    'name1' : "baigan",
    'name2' : "lauki"
}
for (const [key,val] of myobj) {
    // console.log(key ,":->",val); // myobj is not iterable 
}
const myobject = {
    name : " kaadu",
    name1 : "baigan",
    name2 : "lauki"
}
for(const [key,val] of myobject){
    console.log(key,";> ", val); // still it is not iterable 
}