import { useState } from "react";
import Header from "@/components/Header";


export default function Counter() {
    console.log("top");
    let inital_value = 10
    let time = "10pxm"
    let[count, setcount] = useState(initial_value)
let [number, setNumber] = useState(100)
function increment(){
    console.log("increment")
    setCount(++count)
}

    function incrementNumber(){
        // console.log("increment")
        // count++;
      
      // console.log({count});
setNumber(number + 1)
console.log("updated-number", number);






    }



console.log("counter-re-render")

    return (
        <>
       {/* <h1>Count <span id="count">{count}</span></h1>
     <button onClick={incrementNumber}>incrementNUmber</button> */}
          <Header count={count} number={number} />
            <h1>Number: {number}</h1>
            <h1>count<span id="count"> {count} </span> </h1>
            <button onClick={increment}>increment</button>
            <button onClick={incrementNumber}>incrementNumber</button>
        </>
    )
}