const user = {
    username : "ojaswi",
    price:999,
    welcomemessage :function(){
        console.log(`${this.username} , hellu budyyy`)
        console.log(this)
    }
}
// user.welcomemessage()
// user.username = "piyaa"
// user.welcomemessage() 

// console.log(this) // {} -> display in node this keyword refers to empty object . 

// but in browser it refers to window


// function chai(){
//     let name = "hujiyt"
//     // console.log(this);
//     console.log(this.name) // here it gives undefined 
    
// }
// chai()

// const a = function(){
//     let name = "popop"
//     console.log(this.name) // still undefined
// }

// const chai = () =>{
//     let name = "neelam";
//     console.log(this)
// }
// chai()

// const addtwo = (n1,n2) =>{
//     return n1 + n2 // explicit
// }
// console.log(addtwo(9,19))

 // if we use {} braces we have to write return keyword but if use ()  do not use return 
// const addtwo = (n1,n2) =>(n1+n2) // implicit 
// console.log(addtwo(3,10))


const addtwo = (n1,n2) =>({username :"ojaswi"})
console.log(addtwo(9,0))