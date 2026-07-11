// array.forEach(element => {
    
// });

let coding = ["js","python","ruby","rust"];
// coding.forEach(function(val){ // here we r passing a callback function 
//     console.log(val)
// })
// coding.forEach( (val)=> {
//     console.log(val)
// })// here we r passing a callback function 
    
// function print(val){
//     console.log(val)
// }
// coding.forEach(print);


coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const multipleobj = [
    {
        lang :"javascipt",
        run:"js"
    },
    {
        lang :"java",
        run:"java"
    },
    {
        lang :"ruby",
        run:"rb"
    }
]
multipleobj.forEach((multipleobj)=>{
    console.log(multipleobj)
})