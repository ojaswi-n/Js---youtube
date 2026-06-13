const a = 100;
// console.log(a);

const b = new Number(234)
// console.log(b);

// console.log(b.toString().length);
// console.log(b.toFixed(2));


const num = 133.894
// console.log(num.toPrecision(3));
// console.log(num.toPrecision(2));

const money = 2939390
// console.log(money.toLocaleString());
// console.log(money.toLocaleString('en-IN'));
//+++++++++++++++++++++++++++++++. maths +++++++++++++
// console.log(Math.abs(-2))
// console.log(Math.round(2.1))
// console.log(Math.ceil(3.1))
// console.log(Math.floor(2.6))
console.log(Math.random()) // b/w 0 and 1
console.log(Math.random()*10 +1 ) // atleast 1 or greater

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max- min +1) + min) )