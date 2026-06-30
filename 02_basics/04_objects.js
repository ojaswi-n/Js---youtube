// const tinder = new Object()--->> singleton
const tinder = {}
tinder.id = "1bahbf"
tinder.name = "adrak"

// console.log(tinder)
const user = {
    name : "ojaswi",
    fname :{
        userfname :{
            firstname : "mina",
            lastname :"shakti"
        }
    }
}
// console.log(user.name);
// console.log(user.fname.userfname.firstname)// "?" -> if fname doesn't exist
const obj1 = {1:"4",2:"3"}
const obj2 = {5:"a",6:"8"}
// const obj3 = {obj1,obj2};
const obj3 = Object.assign({},obj1,obj2);// {}-> is refered as a target and other as source 
// console.log(obj3);
const obj4 = {...obj1,...obj2} // spread operator

// console.log(obj4);

const usernew = [
    {
        id:12,
        name:"ali"
    },
    {
        id:23,
        name:"mony"
    },{
        id:99,
        name:"jio"
    },
]
// console.log(usernew[0].name)
// console.log(tinder);
// console.log(Object.keys(tinder))
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty("islogged")); // false

// deconstruct 
const exam = {
    subject :"English",
    marks:90
}
const {subject: sub} = exam
console.log(sub)


// +++++json
// {
//     name :"oajswi",
//     course:"js",
//     price :"99"
// }






