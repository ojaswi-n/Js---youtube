const nums = [1,2,3,4]
// const total = nums.reduce( function (acc, curr_val){
//     console.log(`acc:${acc} and curr_val:${curr_val}`)
//     return acc + curr_val
// },0 ) 
// this '0' defines the true value of accuator i.e given here as zero u can give it any number

// const total = nums.reduce((acc,curr_val)=> acc+curr_val , 0)

let shoppingcart = [
    {
        item:"oreo",
        price:30
    },
    {
        item:"jim jam",
        price:100
    },
    {
        item:"biscoff",
        price:300
    },
    {
        item:"bourbon",
        price:90
    },
]
const total = shoppingcart.reduce((acc,item)=> acc+item.price , 0)
console.log(total)