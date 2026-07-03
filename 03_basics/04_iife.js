//immediately invoked functions expression(IIFE)
 
// function chai (){
//     console.log("ojaswi");
// }                           NORMALLY INVOKED
// chai()

(function chai (){
    console.log("ojaswi");
})(); // if we don't use semicolon at the end it creates problem for next function



// () = function defined () => for execution
// why we use this =? due to global scope  pollution  at certain times problem is created so to remove this . we 
// r removing the global scope of pollution of different var declarations and all.


// (() => {
//     console.log("db connnected")
// }) ();


(function nextfun(){
    //named iife
    console.log("hello again")

})();


((name) => {
    console.log(`db connected ${name}`)
}) ('newfunction')