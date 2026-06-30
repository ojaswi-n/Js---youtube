//singleton
//literal and constructor:-> types to declare objects
// while declaring like literal " singleton " is not formed
//constructor -> singleton
//Object.create

// object literal
const mysym = Symbol("hello")
const jsuser = {
    name :"ojaswi",
    // mysym :"newhello",
    [mysym] :"newhello",// how to declare the symbol in object like this


    "fname": "nigam",
    age:18,
    location: "ojawi@gmail.com",
    isloggedin : false,
    lastlogindays:["monday","wednesday"]
}
// console.log(jsuser.name);
// console.log(jsuser[name]);
// console.log(jsuser["name"]);
// console.log(jsuser."fname")// this is wrong
// console.log(jsuser["fname"]);
// console.log(typeof jsuser.mysym);
// console.log( jsuser[mysym]);

jsuser.name = "hina"
// console.log(jsuser.name);
// Object.freeze(jsuser)
jsuser.name = "mina"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello buddy");
}
jsuser.greet = function(){
    console.log(`hello busy people, ${this.name}`);
}
// console.log(jsuser.greeting)
// console.log(jsuser.greeting())
console.log(jsuser.greet())