// let a = 23
// const b = 34
// var c = 90

let a = 100;
if(true){
    let a = 23
    const b = 34
    var c = 90// same as c = 90
}
c = 5758
// console.log(a);// a is not defined
// console.log(b);// b is not defined
// console.log(c);
// console.log(a)

// note to remember-> node k global scope alag hota h iska alag


function one() {
    const username ="ojaswi";

    function two(){
        website = "youtube"
        // console.log(username);
    }
    // console.log(website)

    two()
}
one()

// ++++++++++++++++++++interesting++++++++
console.log(addone(8))
function addone(num){
    return num +1;

}
// addone(2)
console.log(addtwo(8)) // cannot be accesed because of how function is declared  
const addtwo = function (num){
    return num+2
}
// addtwo(6)