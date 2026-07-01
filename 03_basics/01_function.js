function  myname() {
    // console.log("ojaswi");
    // console.log("hi budyy")
}
myname // reference
myname()// execution
function addtwonumber(n1,n2){ /// function ->def has parameters
     
    console.log(n1+n2);
}
addtwonumber(1,"4") // arguments
addtwonumber(1,"a");
const ans = addtwonumber(3,6)

function addtwonumber(n1,n2){ /// function ->def has parameters
     
    // let r = n1+n2;
    // return r
    return n1+n2;

}
// const ans2 = addtwonumber(8,8)
// console.log(ans2)

function loginuser(uname ="sam"){ // hwere we provide default value i.e "sam"
    if(uname === undefined){
        console.log("enter ur name ");
        return
        
    }
    return`${uname} just logged in`
}
// console.log(loginuser("ojaswi"))
// console.log(loginuser()) // gives undefined

function calculatecartprice(val1,val2,...n){ // here we use rest operator that collects ll the things and bundles it in array
    return n;
}
// console.log(calculatecartprice(200,23,9383,74,849)) // val1 - 200 and val2 = 23 rest remain in array

const obj ={
    name:"diya",
    id:234
}
function handleobject(obj){
    console.log(`name ->${obj.name} and id ->${obj.id} `)
}
handleobject(obj)

const array  = [200,300,400,500,600]
