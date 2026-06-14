let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

// console.log(date.getTimezoneOffset());
// console.log(typeof date)
let newdate = new Date(2026,0,11)
// console.log(newdate.toDateString())
// let newdate = new Date(2020,12,3,3,2,81)
// console.log(newdate.toLocaleString())
let datei = new Date("01-14-2024")
// console.log(datei.toLocaleString())
  

// let create_date = new Date("01-3-2026");

let timeStamp = Date.now() // miliseconds

// console.log(timeStamp)
// console.log(create_date.getTime())
// console.log(Math.floor(Date.now()/1000)) // converted to seconds 

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);


newDate.toLocaleString('Default',{
    weekday :"long",
    timeZone :timeStamp
})



