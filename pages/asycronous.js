let num1 = 23
let num2 = 22
// function doSomething() {
//     console.log("do-something")
// }
// setTimeout(doSomething, 3000)
function sum(a, b) {
    return a + b;
}
sum(1, 2)
console.log(num1)
console.log(num2)
console.log(num1 + num2)

/* promise

-pending
-resolve
-reject


*/

let promise1 = new Promise ((resolve,reject) => {
reject([{name: "css"}, {name: "html"}])

})
console.log("before-promise");
promise1.then((res)=>{console.log(res)});
console.log("after-promise");