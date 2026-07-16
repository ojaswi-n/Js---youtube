const nums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = nums.map( (val) => val+10 )
// chaining

const newnums = nums
                    .map( (n)=> n *10)
                    .map((n)=>n+2)
                    .filter( (n) => n >50)
console.log(newnums)